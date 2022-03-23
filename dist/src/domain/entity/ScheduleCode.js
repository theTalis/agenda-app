"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleCode {
    constructor(date, sequence) {
        this.value = this.generateCode(date, sequence);
    }
    generateCode(date, sequence) {
        const year = date.getFullYear();
        return `${year}${sequence.toString().padStart(8, "0")}`;
    }
}
exports.default = ScheduleCode;
