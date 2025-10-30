import { fetchClient } from "../../../core/api/fetchClient";
import { type CounterRepository } from "../domain/CounterRepository";
import { type Counter, CounterSchema } from "../domain/Counter";


export class CounterRepositoryImpl implements CounterRepository {
  async getCounter(): Promise<Counter> {
    const res = await fetchClient.get("/api/v1/counter/");
    return CounterSchema.parse(res.data)
  }

  async increment(): Promise<Counter> {
    const res = await fetchClient.post("api/v1/counter/increment/");
    return CounterSchema.parse(res.data)
  }
}
