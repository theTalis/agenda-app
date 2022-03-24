import ScheduleDAO from "../../application/dao/ScheduleDAO";
import GetSchedule from "../../application/usecase/get_schedule/GetSchedule";

export default class GetScheduleController {

	constructor (readonly scheduleDAO: ScheduleDAO) {
	}

	async execute (params: any, body: any) {
		const getSchedule = new GetSchedule(this.scheduleDAO);
		const getScheduleOutput = await getSchedule.execute(params.code);
		return getScheduleOutput;
	}
}
