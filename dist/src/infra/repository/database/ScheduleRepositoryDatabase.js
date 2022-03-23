"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    save(schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            const [scheduleData] = yield this.connection.query("insert into app.schedule (code, date) values ($1, $2) returning  *", [schedule.getCode(), schedule.date]);
            for (const scheduleItem of schedule.getScheduleItems()) {
                yield this.connection.query("insert into app.schedule_item (id_person, id_schedule, status) values ($1, $2, $3)", [scheduleItem.idPerson, scheduleData.id_schedule, 1]);
            }
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            const [scheduleData] = yield this.connection.query("select count(*)::int as count from app.schedule", []);
            return scheduleData.count;
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.query("delete from app.schedule_item", []);
            yield this.connection.query("delete from app.schedule", []);
        });
    }
}
exports.default = ScheduleRepositoryDatabase;
