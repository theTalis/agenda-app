
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import PlaceScheduleController from "../controller/PlaceScheduleController";
import Http from "./Http";

export default class RouteConfig {

	constructor (http: Http, repositoryFactory: RepositoryFactory) {

		http.on("/schedules", "post", async function (params: any, body: any) {
			const placeScheduleController = new PlaceScheduleController(repositoryFactory);
			return placeScheduleController.execute(params, body);
		});		
	}
}