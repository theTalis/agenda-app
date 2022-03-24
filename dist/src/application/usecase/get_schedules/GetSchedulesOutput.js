"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSchedulesOutput {
    constructor() {
        this.schedules = [];
    }
    addSchedule(code, total) {
        this.schedules.push({ code, total });
    }
}
exports.default = GetSchedulesOutput;
