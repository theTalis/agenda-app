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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../../../domain/entity/Person"));
const Schedule_1 = __importDefault(require("../../../domain/entity/Schedule"));
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
    get(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const [scheduleData] = yield this.connection.query("select * from app.schedule where code = $1", [code]);
            if (!scheduleData)
                throw new Error("Schedule not found");
            const schedule = new Schedule_1.default(scheduleData.date, scheduleData.sequence);
            const scheduleItemsData = yield this.connection.query("select * from app.schedule_item where id_order = $1", [scheduleData.id_schedule]);
            for (const scheduleItemData of scheduleItemsData) {
                const [personData] = yield this.connection.query("select * from app.person where id_item = $1", [scheduleItemData.id_person]);
                const person = new Person_1.default(personData.id_person, personData.name, personData.created_at, personData.phone, personData.email, personData.status);
                schedule.addItem(person);
            }
            return schedule;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const schedules = [];
            const schedulesData = yield this.connection.query("select * from app.schedule", []);
            for (const scheduleData of schedulesData) {
                const schedule = yield this.get(scheduleData.code);
                schedules.push(schedule);
            }
            return schedules;
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
