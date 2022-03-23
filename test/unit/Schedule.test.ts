import Person from "../../src/domain/entity/Person";
import Schedule from "../../src/domain/entity/Schedule";

test("Deve criar um agendamento com 3 pessoas", function () {
	const schedule = new Schedule(new Date("2022-03-01"));
	schedule.addItem(new Person(1, "Sergio", new Date("2022-01-01"), "47 98877-7788", "", 1));
	schedule.addItem(new Person(2, "Marta", new Date("2022-02-01"), "47 98777-7788", "", 1));
	schedule.addItem(new Person(3, "Jose", new Date("2022-02-11"), "47 98855-7788", "", 1));
	const total = schedule.getTotal();
	expect(total).toBe(3);
});
