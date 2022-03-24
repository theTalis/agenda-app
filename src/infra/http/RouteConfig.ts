
import ScheduleDAO from "../../application/dao/ScheduleDAO";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import GetScheduleController from "../controller/GetScheduleController";
import GetSchedulesController from "../controller/GetSchedulesController";
import PlaceScheduleController from "../controller/PlaceScheduleController";
import Http from "./Http";

export default class RouteConfig {

	constructor (http: Http, repositoryFactory: RepositoryFactory, scheduleDAO: ScheduleDAO) {

		http.on("/schedules", "post", async function (params: any, body: any) {
			const placeScheduleController = new PlaceScheduleController(repositoryFactory);
			return placeScheduleController.execute(params, body);
		});

		http.on("/schedules", "get", async function (params: any, body: any) {
			const getSchedulesController = new GetSchedulesController(scheduleDAO);
			return getSchedulesController.execute(params, body);
		});

		http.on("/schedules/:code", "get", async function (params: any, body: any) {
			const getSchedulesController = new GetScheduleController(scheduleDAO);
			return getSchedulesController.execute(params, body);
		});
	}
}