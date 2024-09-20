import { Router } from "express";
import { ProgressController } from "../controllers/controller.js";
import { validateTopicIdParams } from "../middlewares/middleware.js";
import { validateToken } from "../middlewares/middleware.js";
import { createProgressValidation } from "../middlewares/request-validators/progress.js";
const ProgressRouter = Router();

ProgressRouter.get("/topic/:topicId", validateToken, validateTopicIdParams, ProgressController.getProgressByTopicId);
ProgressRouter.post(
  "/",
  validateToken,
  createProgressValidation,
  ProgressController.create
);


export default ProgressRouter;