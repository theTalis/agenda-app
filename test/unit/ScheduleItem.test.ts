import ScheduleItem from "../../src/domain/entity/ScheduleItem";

test("Deve criar um item do agendamento", function () {
	const scheduleItem = new ScheduleItem(1, 1);
	expect(scheduleItem.getStatus()).toBe(1);
});
