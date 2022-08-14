import { Fact } from '../domain/model/fact.model';

class FactRepo {
  /**
   *
   */
  #facts = [
    new Fact({
      title: "Fact #1",
      author: "John Cena",
      dateCreated: new Date(),
    }),
    new Fact({
      title: "Fact #1",
      author: "John Cena",
      dateCreated: new Date(),
    }),
    new Fact({
      title: "Fact #1",
      author: "John Cena",
      dateCreated: new Date(),
    }),
  ];

  constructor() {
    console.log("FactRepo created!")
  }

  get(factId) {
    return this.#facts.find((it) => it.id === factId);
  }

  list() {
    return this.#facts;
  }
}

export {
  FactRepo
}