import ScheduleItem from "../src/ScheduleItem";


test("Deve criar um item na agenda", function () {    
    const scheduleItem = new ScheduleItem(1, new Date("2022-03-25 10:00:00"));
    expect(scheduleItem.getIdPerson()).toBe(1);
});