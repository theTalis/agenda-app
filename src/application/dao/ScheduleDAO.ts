export default interface ScheduleDAO {
	get(code: string): Promise<any>;
	findAll(): Promise<any>;
}
