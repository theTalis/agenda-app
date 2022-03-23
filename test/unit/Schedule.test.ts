import Schedule from "../../src/domain/entity/Schedule";

test("Deve verificar se a data possui agenda disponível", function () {
    const schedule = new Schedule(new Date("2022-03-25 10:00:00"));
    expect(schedule.getFreeSchedule()).toBe(true);
});
