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

	async count(): Promise<number> {
		const [scheduleData] = await this.connection.query("select count(*)::int as count from app.schedule", []);
		return scheduleData.count;
	}

	async clear(): Promise<void> {
		await this.connection.query("delete from app.schedule_item", []);
		await this.connection.query("delete from app.schedule", []);
	}
}
