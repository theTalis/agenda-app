export default class Person {
    id: number;
    name: string;

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getNameLength() : number {
        return this.name.length;
    }
}