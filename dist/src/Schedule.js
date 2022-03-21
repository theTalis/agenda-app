"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleItem_1 = __importDefault(require("./ScheduleItem"));
class Schedule {
    constructor(date) {
        this.date = date;
        this.scheduleItems = [];
    }
    addItem(person, date) {
        this.scheduleItems.push(new ScheduleItem_1.default(person.id, new Date("2022-03-25 10:00:00")));
    }
    getTotal() {
        return this.scheduleItems.length;
    }
    getFreeSchedule() {
        return true;
    }
}
exports.default = Schedule;
