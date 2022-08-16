import { Router } from "express";
import { addNewFeedbackController, listFeedbackController } from "./controller.js";

const FeedbackRouter = Router();

FeedbackRouter.post("/new", addNewFeedbackController);

FeedbackRouter.get("/list", listFeedbackController);


export {
  FeedbackRouter
}