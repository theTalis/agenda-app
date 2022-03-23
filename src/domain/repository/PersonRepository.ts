import Person from "../entity/Person";

export default interface PersonRepository {
	findById(idPerson: number): Promise<Person | undefined>;
}
