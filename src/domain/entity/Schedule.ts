import ScheduleCode from "./ScheduleCode";
import Person from "./Person";
import ScheduleItem from "./ScheduleItem";

export default class Schedule {
	private scheduleItems: ScheduleItem[];
	date: Date;
	private code: ScheduleCode;
	
	constructor (date: Date, readonly sequence: number = 1) {
		this.scheduleItems = [];
		this.date = date;
		this.code = new ScheduleCode(date, sequence);
	}

	addItem (item: Person) {
		this.scheduleItems.push(new ScheduleItem(item.idPerson, 1));
	}

	getScheduleItems () {
		return this.scheduleItems;
	}

	getCode () {
		return this.code.value;
	}

	getTotal () {
		return this.scheduleItems.length;
	}
}
