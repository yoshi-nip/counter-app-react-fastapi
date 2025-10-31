import { type CounterRepository } from "../domain/CounterRepository";

export class GetCounterUseCase {

  private repo: CounterRepository

  constructor(repo : CounterRepository){
    this.repo = repo
  }

  async execute(){
    return this.repo.getCounter();
  }
}
