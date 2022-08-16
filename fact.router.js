import { Router } from "express";
import { listFactsController } from "./controller.js";

const FactRouter = Router();

FactRouter.get("/list", listFactsController)

export {
  FactRouter
}