import ScheduleDAO from "../../dao/ScheduleDAO";
import GetSchedulesOutput from "./GetSchedulesOutput";

export default class GetSchedules {
	constructor (readonly scheduleDAO: ScheduleDAO) {
	}

	async execute (): Promise<GetSchedulesOutput> {
		const schedulesData = await this.scheduleDAO.findAll();
		const getSchedulesOutput = new GetSchedulesOutput();
		for (const scheduleData of schedulesData) {
			getSchedulesOutput.addSchedule(scheduleData.code, scheduleData.total);
		}
		return getSchedulesOutput;
	}
}
