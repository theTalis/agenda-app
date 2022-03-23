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
const Schedule_1 = __importDefault(require("../../../domain/entity/Schedule"));
const PlaceScheduleOutput_1 = __importDefault(require("./PlaceScheduleOutput"));
class PlaceSchedule {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.personRepository = repositoryFactory.createPersonRepository();
        this.scheduleRepository = repositoryFactory.createScheduleRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const sequence = (yield this.scheduleRepository.count()) + 1;
            const schedule = new Schedule_1.default(input.date, sequence);
            for (const scheduleItem of input.scheduleItems) {
                const person = yield this.personRepository.findById(scheduleItem.idPerson);
                if (!person)
                    throw new Error("Person not found");
                schedule.addItem(person);
            }
            yield this.scheduleRepository.save(schedule);
            const total = schedule.getTotal();
            const output = new PlaceScheduleOutput_1.default(schedule.getCode(), total);
            return output;
        });
    }
}
exports.default = PlaceSchedule;
