export default class ScheduleItem {

	constructor (readonly idPerson: number, readonly status: number) {
	}

	getStatus () {
		return this.status;
	}
}
