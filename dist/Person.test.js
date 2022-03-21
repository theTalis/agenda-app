"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
test("Should calculate length of person name", function () {
    const person = new Person_1.default("Talis");
    expect(person.getNameLength()).toBe(5);
});
