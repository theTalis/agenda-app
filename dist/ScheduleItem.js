"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleItem {
    constructor(idPerson, date) {
        this.idPerson = idPerson;
        this.date = date;
    }
    getIdPerson() {
        return this.idPerson;
    }
}
exports.default = ScheduleItem;
