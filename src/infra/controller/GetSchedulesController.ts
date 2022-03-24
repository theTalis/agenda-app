import ScheduleDAO from "../../application/dao/ScheduleDAO";
import GetSchedules from "../../application/usecase/get_schedules/GetSchedules";

export default class GetSchedulesController {

	constructor (readonly scheduleDAO: ScheduleDAO) {
	}

	async execute (params: any, body: any) {
		const getSchedules = new GetSchedules(this.scheduleDAO);
		const getSchedulesOutput = await getSchedules.execute();
		return getSchedulesOutput;
	}
}
