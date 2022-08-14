import { FactRepo } from "./data/fact.repo";
import { FactUseCase } from "./domain/usecase/facts.usecase";

class DIProvider {

  factUseCase;

  constructor(env) {
    if (env !== "PROD") {
      const factRepo = new FactRepo();
      this.factUseCase = new FactUseCase(factRepo);
    }
  }
}

export {
  DIProvider
}