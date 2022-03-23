"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(idPerson, name, createdAt, phone, email, status) {
        this.idPerson = idPerson;
        this.name = name;
        this.createdAt = createdAt;
        this.phone = phone;
        this.email = email;
        this.status = status;
    }
}
exports.default = Person;
