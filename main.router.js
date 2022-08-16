import { Router } from "express";
import { FeedbackRouter } from "./feedback.router.js";
import { FactRouter } from "./fact.router.js";

const MainRouter = Router();

MainRouter.use("/feedback", FeedbackRouter);
MainRouter.use("/fact", FactRouter);

export {
  MainRouter
}