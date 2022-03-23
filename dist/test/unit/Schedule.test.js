"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../../src/domain/entity/Person"));
const Schedule_1 = __importDefault(require("../../src/domain/entity/Schedule"));
test("Deve criar um agendamento com 3 pessoas", function () {
    const schedule = new Schedule_1.default(new Date("2022-03-01"));
    schedule.addItem(new Person_1.default(1, "Sergio", new Date("2022-01-01"), "47 98877-7788", "", 1));
    schedule.addItem(new Person_1.default(2, "Marta", new Date("2022-02-01"), "47 98777-7788", "", 1));
    schedule.addItem(new Person_1.default(3, "Jose", new Date("2022-02-11"), "47 98855-7788", "", 1));
    const total = schedule.getTotal();
    expect(total).toBe(3);
});
