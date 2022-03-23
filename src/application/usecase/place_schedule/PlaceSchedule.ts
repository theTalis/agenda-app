import Schedule from "../../../domain/entity/Schedule";
import RepositoryFactory from "../../../domain/factory/RepositoryFactory";
import PersonRepository from "../../../domain/repository/PersonRepository";
import ScheduleRepository from "../../../domain/repository/ScheduleRepository";
import PlaceScheduleInput from "./PlaceScheduleInput";
import PlaceScheduleOutput from "./PlaceScheduleOutput";

export default class PlaceSchedule {
	personRepository: PersonRepository;
	scheduleRepository: ScheduleRepository;

	constructor (readonly repositoryFactory: RepositoryFactory) {
		this.personRepository = repositoryFactory.createPersonRepository();
		this.scheduleRepository = repositoryFactory.createScheduleRepository();
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
		const total = schedule.getTotal();
		const output = new PlaceScheduleOutput(schedule.getCode(), total);
		return output;
	}
}
