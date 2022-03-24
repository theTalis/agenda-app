import Person from "../../../domain/entity/Person";
import Schedule from "../../../domain/entity/Schedule";
import ScheduleRepository from "../../../domain/repository/ScheduleRepository";
import Connection from "../../database/Connection";

export default class ScheduleRepositoryDatabase implements ScheduleRepository {

	constructor (readonly connection: Connection) {
	}

	async save(schedule: Schedule): Promise<void> {
		const [scheduleData] = await this.connection.query("insert into app.schedule (code, date) values ($1, $2) returning  *", [schedule.getCode(), schedule.date]);
		for (const scheduleItem of schedule.getScheduleItems()) {
			await this.connection.query("insert into app.schedule_item (id_person, id_schedule, status) values ($1, $2, $3)", [scheduleItem.idPerson, scheduleData.id_schedule, 1]);
		}
	}

	async get(code: string): Promise<Schedule> {
		const [scheduleData] = await this.connection.query("select * from app.schedule where code = $1", [code]);
		if (!scheduleData) throw new Error("Schedule not found");
		const schedule = new Schedule(scheduleData.date, scheduleData.sequence);
		const scheduleItemsData = await this.connection.query("select * from app.schedule_item where id_order = $1", [scheduleData.id_schedule]);
		for (const scheduleItemData of scheduleItemsData) {
			const [personData] = await this.connection.query("select * from app.person where id_item = $1", [scheduleItemData.id_person]);
			const person = new Person(personData.id_person, personData.name, personData.created_at, personData.phone, personData.email, personData.status);
			schedule.addItem(person);
		}
		return schedule;
	}

	async findAll(): Promise<Schedule[]> {
		const schedules: Schedule[] = [];
		const schedulesData = await this.connection.query("select * from app.schedule", []);
		for (const scheduleData of schedulesData) {
			const schedule = await this.get(scheduleData.code);
			schedules.push(schedule);
		}
		return schedules;
	}

	async count(): Promise<number> {
		const [scheduleData] = await this.connection.query("select count(*)::int as count from app.schedule", []);
		return scheduleData.count;
	}

	async clear(): Promise<void> {
		await this.connection.query("delete from app.schedule_item", []);
		await this.connection.query("delete from app.schedule", []);
	}
}
