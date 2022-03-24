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
const GetScheduleController_1 = __importDefault(require("../controller/GetScheduleController"));
const GetSchedulesController_1 = __importDefault(require("../controller/GetSchedulesController"));
const PlaceScheduleController_1 = __importDefault(require("../controller/PlaceScheduleController"));
class RouteConfig {
    constructor(http, repositoryFactory, scheduleDAO) {
        http.on("/schedules", "post", function (params, body) {
            return __awaiter(this, void 0, void 0, function* () {
                const placeScheduleController = new PlaceScheduleController_1.default(repositoryFactory);
                return placeScheduleController.execute(params, body);
            });
        });
        http.on("/schedules", "get", function (params, body) {
            return __awaiter(this, void 0, void 0, function* () {
                const getSchedulesController = new GetSchedulesController_1.default(scheduleDAO);
                return getSchedulesController.execute(params, body);
            });
        });
        http.on("/schedules/:code", "get", function (params, body) {
            return __awaiter(this, void 0, void 0, function* () {
                const getSchedulesController = new GetScheduleController_1.default(scheduleDAO);
                return getSchedulesController.execute(params, body);
            });
        });
    }
}
exports.default = RouteConfig;
