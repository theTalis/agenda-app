"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleCode_1 = __importDefault(require("../../src/domain/entity/ScheduleCode"));
test("Deve criar um código de agendamento", function () {
    const date = new Date("2021-10-01");
    const sequence = 1;
    const scheduleCode = new ScheduleCode_1.default(date, sequence);
    const value = scheduleCode.value;
    expect(value).toBe("202100000001");
});
