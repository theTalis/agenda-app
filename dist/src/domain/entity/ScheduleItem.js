"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleItem {
    constructor(idPerson, status) {
        this.idPerson = idPerson;
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
}
exports.default = ScheduleItem;
