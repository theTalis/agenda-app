import Schedule from "../entity/Schedule";

export default interface ScheduleRepository {
	save(schedule: Schedule): Promise<void>;
	count(): Promise<number>;
	clear(): Promise<void>;
}
