import Person from "./Person";
import ScheduleItem from "./ScheduleItem";

export default class Schedule {
    date: Date;
    scheduleItems: ScheduleItem[];

    constructor (date: Date) {
        this.date = date;
        this.scheduleItems = [];
    }

    addItem(person: Person, date: Date) {
        this.scheduleItems.push(new ScheduleItem(person.id, new Date("2022-03-25 10:00:00")));
    }

    getTotal() {
        return this.scheduleItems.length;
    }

    getFreeSchedule() {
        return true;
    }
}