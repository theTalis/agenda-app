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
const PlaceSchedule_1 = __importDefault(require("../../src/application/usecase/place_schedule/PlaceSchedule"));
const PgPromiseConnectionAdapter_1 = __importDefault(require("../../src/infra/database/PgPromiseConnectionAdapter"));
const PersonRepositoryDatabase_1 = __importDefault(require("../../src/infra/repository/database/PersonRepositoryDatabase"));
const ScheduleRepositoryDatabase_1 = __importDefault(require("../../src/infra/repository/database/ScheduleRepositoryDatabase"));
let placeSchedule;
let scheduleRepository;
beforeEach(function () {
    const connection = PgPromiseConnectionAdapter_1.default.getInstance();
    const personRepository = new PersonRepositoryDatabase_1.default(connection);
    scheduleRepository = new ScheduleRepositoryDatabase_1.default(connection);
    placeSchedule = new PlaceSchedule_1.default(personRepository, scheduleRepository);
});
test("Deve fazer um agendamento", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const input = {
            date: new Date("2021-12-10"),
            scheduleItems: [
                { idPerson: 1, status: 1 },
                { idPerson: 2, status: 1 },
                { idPerson: 3, status: 1 }
            ],
        };
        const output = yield placeSchedule.execute(input);
        expect(output.total).toBe(3);
    });
});
/*
test("Deve fazer um pedido com cálculo de frete", async function () {
    const input = {
        cpf: "839.435.452-10",
        orderItems: [
            { idItem: 4, quantity: 1},
            { idItem: 5, quantity: 1},
            { idItem: 6, quantity: 3}
        ],
        date: new Date("2021-12-10")
    };
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(6350);
});

test("Deve fazer um pedido com código", async function () {
    const input = {
        cpf: "839.435.452-10",
        orderItems: [
            { idItem: 4, quantity: 1},
            { idItem: 5, quantity: 1},
            { idItem: 6, quantity: 3}
        ],
        date: new Date("2021-12-10")
    };
    const output = await placeOrder.execute(input);
    expect(output.code).toBe("202100000001");
});

afterEach(async function () {
    await orderRepository.clear();
});
*/ 
