import { Router } from "express";
import { DIProvider } from "../di.provider";

const factDto = {
  id: "",
  title: "",
  description: ""
}

export const FactsRouter = Router();

const fact = {
  factId: 1,
  title: "Fun fact 1"
}

FactsRouter.get('/list', (req, res, next) => {

  const facts = DIProvider.factUseCase.getAllFacts();

  const respBody = facts.map((it) => {
    return {
      id: it.id,
      title: it.title,
      description: it.description
    }
  });
  
  res.json(respBody);
});