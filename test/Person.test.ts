import Person from "../src/domain/entity/Person";

test("Should calculate length of person name", function () {
    const person = new Person(1, "Talis");
    expect(person.getNameLength()).toBe(5);
});
