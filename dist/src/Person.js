"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getNameLength() {
        return this.name.length;
    }
}
exports.default = Person;
