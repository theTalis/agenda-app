import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import PersonRepository from "../../domain/repository/PersonRepository";
import ScheduleRepository from "../../domain/repository/ScheduleRepository";
import PgPromiseConnectionAdapter from "../database/PgPromiseConnectionAdapter";
import PersonRepositoryDatabase from "../repository/database/PersonRepositoryDatabase";
import ScheduleRepositoryDatabase from "../repository/database/ScheduleRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {

	constructor () {
	}

	createPersonRepository(): PersonRepository {
		return new PersonRepositoryDatabase(PgPromiseConnectionAdapter.getInstance());
	}

	createScheduleRepository(): ScheduleRepository {
		return new ScheduleRepositoryDatabase(PgPromiseConnectionAdapter.getInstance());
	}

}