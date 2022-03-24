import ScheduleDAO from "../../application/dao/ScheduleDAO";
import Connection from "../database/Connection";

export default class ScheduleDAODatabase implements ScheduleDAO {

	constructor (readonly connection: Connection) {
	}

	async get(code: string): Promise<any> {
		return this.connection.query("select code, total::float from app.schedule where code = $1", [code]);
	}

	async findAll(): Promise<any> {
		return this.connection.query("select code, total::float from app.schedule", []);
	}
}
