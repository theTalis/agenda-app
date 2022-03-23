export default class ScheduleCode {
	readonly value: string;

	constructor (date: Date, sequence: number) {
		this.value = this.generateCode(date, sequence);
	}
	
	generateCode (date: Date, sequence: number) {
		const year = date.getFullYear();
		const month = date.getMonth()+1;
		const day = date.getDay();
		return `${year}${month}${day}${sequence.toString().padStart(8, "0")}`;
	}
}