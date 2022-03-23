"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleCode_1 = __importDefault(require("./ScheduleCode"));
const ScheduleItem_1 = __importDefault(require("./ScheduleItem"));
class Schedule {
    constructor(date, sequence = 1) {
        this.sequence = sequence;
        this.scheduleItems = [];
        this.date = date;
        this.code = new ScheduleCode_1.default(date, sequence);
    }
    addItem(item) {
        this.scheduleItems.push(new ScheduleItem_1.default(item.idPerson, 1));
    }
    getScheduleItems() {
        return this.scheduleItems;
    }
    getCode() {
        return this.code.value;
    }
    getTotal() {
        return this.scheduleItems.length;
    }
}
exports.default = Schedule;
