"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleDAODatabase_1 = __importDefault(require("./infra/dao/ScheduleDAODatabase"));
const PgPromiseConnectionAdapter_1 = __importDefault(require("./infra/database/PgPromiseConnectionAdapter"));
const DatabaseRepositoryFactory_1 = __importDefault(require("./infra/factory/DatabaseRepositoryFactory"));
const ExpressAdapter_1 = __importDefault(require("./infra/http/ExpressAdapter"));
const RouteConfig_1 = __importDefault(require("./infra/http/RouteConfig"));
const repositoryFactory = new DatabaseRepositoryFactory_1.default();
const connection = PgPromiseConnectionAdapter_1.default.getInstance();
const scheduleDAO = new ScheduleDAODatabase_1.default(connection);
const expressAdapter = new ExpressAdapter_1.default();
new RouteConfig_1.default(expressAdapter, repositoryFactory, scheduleDAO);
expressAdapter.listen(3000);
