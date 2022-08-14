import { Router } from "express";
import { FactsRouter } from "./facts.router";

const MainRouter = Router();

MainRouter.use('/fact', FactsRouter);

export {
  MainRouter
}