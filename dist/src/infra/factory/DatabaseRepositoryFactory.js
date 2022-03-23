"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PgPromiseConnectionAdapter_1 = __importDefault(require("../database/PgPromiseConnectionAdapter"));
const PersonRepositoryDatabase_1 = __importDefault(require("../repository/database/PersonRepositoryDatabase"));
const ScheduleRepositoryDatabase_1 = __importDefault(require("../repository/database/ScheduleRepositoryDatabase"));
class DatabaseRepositoryFactory {
    constructor() {
    }
    createPersonRepository() {
        return new PersonRepositoryDatabase_1.default(PgPromiseConnectionAdapter_1.default.getInstance());
    }
    createScheduleRepository() {
        return new ScheduleRepositoryDatabase_1.default(PgPromiseConnectionAdapter_1.default.getInstance());
    }
}
exports.default = DatabaseRepositoryFactory;
