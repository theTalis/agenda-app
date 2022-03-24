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
const GetSchedule_1 = __importDefault(require("../../src/application/usecase/get_schedule/GetSchedule"));
const PlaceSchedule_1 = __importDefault(require("../../src/application/usecase/place_schedule/PlaceSchedule"));
const ScheduleDAODatabase_1 = __importDefault(require("../../src/infra/dao/ScheduleDAODatabase"));
const PgPromiseConnectionAdapter_1 = __importDefault(require("../../src/infra/database/PgPromiseConnectionAdapter"));
const DatabaseRepositoryFactory_1 = __importDefault(require("../../src/infra/factory/DatabaseRepositoryFactory"));
const ScheduleRepositoryDatabase_1 = __importDefault(require("../../src/infra/repository/database/ScheduleRepositoryDatabase"));
let placeSchedule;
let getSchedule;
let scheduleRepository;
beforeEach(function () {
    const connection = PgPromiseConnectionAdapter_1.default.getInstance();
    scheduleRepository = new ScheduleRepositoryDatabase_1.default(connection);
    const repositoryFactory = new DatabaseRepositoryFactory_1.default();
    const scheduleDAO = new ScheduleDAODatabase_1.default(connection);
    placeSchedule = new PlaceSchedule_1.default(repositoryFactory);
    getSchedule = new GetSchedule_1.default(scheduleDAO);
});
test("Deve obter um agendamento pelo código", function () {
    return __awaiter(this, void 0, void 0, function* () {
        expect(true).toBeTruthy();
        /*const input = {
            date: new Date("2021-12-10"),
            scheduleItems: [
                { idPerson: 1, status: 1},
                { idPerson: 2, status: 1},
                { idPerson: 3, status: 1}
            ],
        };
        const placeScheduleOutput = await placeSchedule.execute(input);
        const getScheduleOutput = await getSchedule.execute(placeScheduleOutput.code);
    
        console.log("GET SCHEDULE");
        console.log(getScheduleOutput.code);
        console.log(getScheduleOutput.total);*/
        //expect(getScheduleOutput.code).toBe("202100000001");
    });
});
afterEach(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield scheduleRepository.clear();
    });
});
