import PlaceSchedule from "../../application/usecase/place_schedule/PlaceSchedule";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";

export default class PlaceScheduleController {

	constructor (readonly repositoryFactory: RepositoryFactory) {
	}

	async execute (params: any, body: any) {
		const placeOrder = new PlaceSchedule(this.repositoryFactory);
		const input = body;
		input.date = new Date(input.date);
		return await placeOrder.execute(input);
	}
}
