import { FactRepo } from "../../data/fact.repo";
import { Fact } from "../model/fact.model";

class FactUseCase {
  
  /**
   * @type {FactRepo}
   */
  factRepo;

  /**
   * 
   * @param {FactRepo} factRepo 
   */
  constructor(factRepo) {
    this.factRepo = factRepo;
  }

  /**
   * 
   * @returns {Fact[]}
   */
  getAllFacts() {
    return this.factRepo.list();
  }
}

export {
  FactUseCase
};