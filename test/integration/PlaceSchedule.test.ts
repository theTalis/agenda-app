
import PlaceSchedule from "../../src/application/usecase/place_schedule/PlaceSchedule";
import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectionAdapter";
import PersonRepositoryDatabase from "../../src/infra/repository/database/PersonRepositoryDatabase";
import ScheduleRepositoryDatabase from "../../src/infra/repository/database/ScheduleRepositoryDatabase";

let placeSchedule: PlaceSchedule;
let scheduleRepository: ScheduleRepositoryDatabase;

beforeEach(function () {
	const connection = PgPromiseConnectionAdapter.getInstance();
	const personRepository = new PersonRepositoryDatabase(connection);
	scheduleRepository = new ScheduleRepositoryDatabase(connection);
	placeSchedule = new PlaceSchedule(personRepository, scheduleRepository);
});

test("Deve fazer um agendamento", async function () {
	const input = {
		date: new Date("2021-12-01"),
		scheduleItems: [
			{ idPerson: 1, status: 1},
			{ idPerson: 2, status: 1},
			{ idPerson: 3, status: 1}
		],
	};
	const output = await placeSchedule.execute(input);
	expect(output.total).toBe(3);
});

test("Deve fazer um agendamento com código", async function () {
	const input = {
		date: new Date("2021-12-01"),
		scheduleItems: [
			{ idPerson: 4, status: 1},
			{ idPerson: 5, status: 1},
			{ idPerson: 6, status: 1}
		],
	};
	const output = await placeSchedule.execute(input);
	expect(output.code).toBe("202100000001");
});

afterEach(async function () {
	await scheduleRepository.clear();
});
