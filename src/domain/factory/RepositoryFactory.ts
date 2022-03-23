import PersonRepository from "../repository/PersonRepository";
import ScheduleRepository from "../repository/ScheduleRepository";

export default interface RepositoryFactory {

	createPersonRepository(): PersonRepository;
	createScheduleRepository(): ScheduleRepository;
}
