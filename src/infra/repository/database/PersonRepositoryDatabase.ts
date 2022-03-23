
import Person from "../../../domain/entity/Person";
import PersonRepository from "../../../domain/repository/PersonRepository";
import Connection from "../../database/Connection";

export default class PersonRepositoryDatabase implements PersonRepository {
	
	constructor (readonly connection: Connection) {
	}

	async findById(idPerson: number): Promise<Person | undefined> {
		const [personData] = await this.connection.query("select * from app.person where id_person = $1", [idPerson]);
		if (!personData) return;
		return new Person(personData.id_person, personData.name, personData.createdAt, personData.phone, personData.email, personData.status);
	}
}
