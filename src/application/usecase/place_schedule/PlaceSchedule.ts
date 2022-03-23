import Schedule from "../../../domain/entity/Schedule";
import PersonRepository from "../../../domain/repository/PersonRepository";
import ScheduleRepository from "../../../domain/repository/ScheduleRepository";
import PlaceScheduleInput from "./PlaceScheduleInput";
import PlaceScheduleOutput from "./PlaceScheduleOutput";

export default class PlaceSchedule {

	constructor (readonly personRepository: PersonRepository, readonly scheduleRepository: ScheduleRepository) {
	}

	async execute (input: PlaceScheduleInput): Promise<PlaceScheduleOutput> {
		const sequence = await this.scheduleRepository.count() + 1;
		const schedule = new Schedule(input.date, sequence);
		for (const scheduleItem of input.scheduleItems) {
			const person = await this.personRepository.findById(scheduleItem.idPerson);
			if (!person) throw new Error("Person not found");
			schedule.addItem(person);
		}
		await this.scheduleRepository.save(schedule);
		const output = new PlaceScheduleOutput(schedule.getCode());
		return output;
	}
}
