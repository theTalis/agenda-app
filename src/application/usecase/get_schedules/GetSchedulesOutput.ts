export default class GetSchedulesOutput {
	schedules: { code: string, total: number }[];

	constructor () {
		this.schedules = [];
	}

	addSchedule(code: string, total: number) {
		this.schedules.push({ code, total });
	}
}
