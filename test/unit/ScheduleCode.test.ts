import ScheduleCode from "../../src/domain/entity/ScheduleCode";

test("Deve criar um código de agendamento", function () {
	const date = new Date("2021-10-01");
	const sequence = 1;
	const scheduleCode = new ScheduleCode(date, sequence);
	const value = scheduleCode.value;
	expect(value).toBe("202100000001");
});
