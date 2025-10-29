import { type Counter } from "./Counter";

export interface CounterRepository {
  getCounter(): Promise<Counter>;
  increment(): Promise<Counter>;
}
