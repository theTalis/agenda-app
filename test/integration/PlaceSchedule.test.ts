
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
		date: new Date("2021-12-10"),
		scheduleItems: [
			{ idPerson: 1, status: 1},
			{ idPerson: 2, status: 1},
			{ idPerson: 3, status: 1}
		],
	};
	const output = await placeSchedule.execute(input);
	expect(output.total).toBe(3);
});
/*
test("Deve fazer um pedido com cálculo de frete", async function () {
	const input = {
		cpf: "839.435.452-10",
		orderItems: [
			{ idItem: 4, quantity: 1},
			{ idItem: 5, quantity: 1},
			{ idItem: 6, quantity: 3}
		],
		date: new Date("2021-12-10")
	};
	const output = await placeOrder.execute(input);
	expect(output.total).toBe(6350);
});

test("Deve fazer um pedido com código", async function () {
	const input = {
		cpf: "839.435.452-10",
		orderItems: [
			{ idItem: 4, quantity: 1},
			{ idItem: 5, quantity: 1},
			{ idItem: 6, quantity: 3}
		],
		date: new Date("2021-12-10")
	};
	const output = await placeOrder.execute(input);
	expect(output.code).toBe("202100000001");
});

afterEach(async function () {
	await orderRepository.clear();
});
*/