import GetSchedule from "../../src/application/usecase/get_schedule/GetSchedule";
import PlaceSchedule from "../../src/application/usecase/place_schedule/PlaceSchedule";
import ScheduleDAODatabase from "../../src/infra/dao/ScheduleDAODatabase";
import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectionAdapter";
import DatabaseRepositoryFactory from "../../src/infra/factory/DatabaseRepositoryFactory";
import ScheduleRepositoryDatabase from "../../src/infra/repository/database/ScheduleRepositoryDatabase";

let placeSchedule: PlaceSchedule;
let getSchedule: GetSchedule;
let scheduleRepository: ScheduleRepositoryDatabase;

beforeEach(function () {
	const connection = PgPromiseConnectionAdapter.getInstance();
	scheduleRepository = new ScheduleRepositoryDatabase(connection);
	const repositoryFactory = new DatabaseRepositoryFactory();
	const scheduleDAO = new ScheduleDAODatabase(connection);
	placeSchedule = new PlaceSchedule(repositoryFactory);
	getSchedule = new GetSchedule(scheduleDAO);
});

test("Deve obter um agendamento pelo código", async function () {
	const input = {
		date: new Date("2021-12-10"),
		scheduleItems: [
			{ idPerson: 1, status: 1},
			{ idPerson: 2, status: 1},
			{ idPerson: 3, status: 1}
		],
	};
	const placeScheduleOutput = await placeSchedule.execute(input);
	const getScheduleOutput = await getSchedule.execute(placeScheduleOutput.code);
	expect(getScheduleOutput.code).toBe("202100000001");
});

afterEach(async function () {
	await scheduleRepository.clear();
});
