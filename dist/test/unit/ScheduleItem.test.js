"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleItem_1 = __importDefault(require("../../src/domain/entity/ScheduleItem"));
test("Deve criar um item do agendamento", function () {
    const scheduleItem = new ScheduleItem_1.default(1, 1);
    expect(scheduleItem.getStatus()).toBe(1);
});
