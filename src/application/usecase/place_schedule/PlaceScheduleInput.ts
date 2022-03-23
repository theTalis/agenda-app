export default class PlaceScheduleInput {

	constructor (readonly scheduleItems: { idPerson: number, status: number }[], readonly date: Date) {
	}
}
