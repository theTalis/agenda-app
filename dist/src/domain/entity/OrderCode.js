"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleCode {
    constructor(date, sequence) {
        this.value = this.generateCode(date, sequence);
    }
    generateCode(date, sequence) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay();
        return `${year}${month}${day}${sequence.toString().padStart(8, "0")}`;
    }
}
exports.default = ScheduleCode;
