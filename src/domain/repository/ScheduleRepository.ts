import Schedule from "../entity/Schedule";

export default interface ScheduleRepository {
	save(schedule: Schedule): Promise<void>;
	get(code: string): Promise<Schedule>;
	findAll(): Promise<Schedule[]>;
	count(): Promise<number>;
	clear(): Promise<void>;
}
