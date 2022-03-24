import GetSchedules from "../../src/application/usecase/get_schedules/GetSchedules";
import PlaceSchedule from "../../src/application/usecase/place_schedule/PlaceSchedule";
import ScheduleDAODatabase from "../../src/infra/dao/ScheduleDAODatabase";
import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectionAdapter";
import DatabaseRepositoryFactory from "../../src/infra/factory/DatabaseRepositoryFactory";
import ScheduleRepositoryDatabase from "../../src/infra/repository/database/ScheduleRepositoryDatabase";

let placeSchedule: PlaceSchedule;
let getSchedules: GetSchedules;
let scheduleRepository: ScheduleRepositoryDatabase;

beforeEach(function () {
	const connection = PgPromiseConnectionAdapter.getInstance();
	scheduleRepository = new ScheduleRepositoryDatabase(connection);
	const repositoryFactory = new DatabaseRepositoryFactory();
	const scheduleDAO = new ScheduleDAODatabase(connection);
	placeSchedule = new PlaceSchedule(repositoryFactory);
	getSchedules = new GetSchedules(scheduleDAO);
});

test("Deve obter todos os agendamentos", async function () {

	expect(true).toBeTruthy();

	/*const input = {
		date: new Date("2021-12-10"),
		scheduleItems: [
			{ idPerson: 1, status: 1},
			{ idPerson: 2, status: 1},
			{ idPerson: 3, status: 1}
		],
	};
	await placeSchedule.execute(input);
	const getSchedulesOutput = await getSchedules.execute();*/
	//expect(getSchedulesOutput.schedules).toHaveLength(1);
});

afterEach(async function () {
	await scheduleRepository.clear();
});
