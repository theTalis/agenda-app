"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = __importDefault(require("../Schedule"));
test("Deve verificar se a data possui agenda disponível", function () {
    const schedule = new Schedule_1.default(new Date("2022-03-25 10:00:00"));
    expect(schedule.getFreeSchedule()).toBe(true);
});
