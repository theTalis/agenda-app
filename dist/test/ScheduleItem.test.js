"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleItem_1 = __importDefault(require("../src/ScheduleItem"));
test("Deve criar um item na agenda", function () {
    const scheduleItem = new ScheduleItem_1.default(1, new Date("2022-03-25 10:00:00"));
    expect(scheduleItem.getIdPerson()).toBe(1);
});
