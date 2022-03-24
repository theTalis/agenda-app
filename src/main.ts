import ScheduleDAODatabase from "./infra/dao/ScheduleDAODatabase";
import PgPromiseConnectionAdapter from "./infra/database/PgPromiseConnectionAdapter";
import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import RouteConfig from "./infra/http/RouteConfig";

const repositoryFactory = new DatabaseRepositoryFactory();
const connection = PgPromiseConnectionAdapter.getInstance();
const scheduleDAO = new ScheduleDAODatabase(connection);
const expressAdapter = new ExpressAdapter();
new RouteConfig(expressAdapter, repositoryFactory, scheduleDAO);
expressAdapter.listen(3000);
