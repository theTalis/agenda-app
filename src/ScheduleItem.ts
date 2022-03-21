import Person from "./Person";

export default class ScheduleItem {
    
    constructor (readonly idPerson: number, readonly date: Date) {

    }

    getIdPerson() {
        return this.idPerson;
    }
}