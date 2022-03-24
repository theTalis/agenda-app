import ScheduleDAO from "../../dao/ScheduleDAO";
import GetScheduleOutput from "./GetScheduleOutput";

export default class GetSchedule {

	constructor (readonly scheduleDAO: ScheduleDAO) {
	}

	async execute (code: string): Promise<GetScheduleOutput> {
		const [scheduleData] = await this.scheduleDAO.get(code);
		const getScheduleOutput = new GetScheduleOutput(scheduleData.code, scheduleData.total);
		return getScheduleOutput;
	}
}
