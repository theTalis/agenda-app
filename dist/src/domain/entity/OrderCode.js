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
        console.log("GENERATE CODE");
        console.log(date);
        console.log(year);
        console.log(month);
        console.log(day);
        return `${year}${month}${day}${sequence.toString().padStart(8, "0")}`;
    }
}
exports.default = ScheduleCode;
