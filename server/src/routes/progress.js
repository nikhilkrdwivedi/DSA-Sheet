import { Router } from "express";
import {ChapterController, ProgressController} from "../controllers/controller.js";
import {validateTopicIdParams,createChapterValidation, updateChapterValidation,validateChapterIdParams} from "../middlewares/middleware.js";
import { validateToken } from "../middlewares/middleware.js";
import { createProgressValidation } from "../middlewares/request-validators/progress.js";
const ProgressRouter = Router();

// ProgressRouter.get("/topic/ch", validateToken, ProgressController.getChapters);
// ProgressRouter.get("/:chapterId", validateToken, validateChapterIdParams,ProgressController.getChapter);
ProgressRouter.get("/topic/:topicId", validateToken, validateTopicIdParams,ProgressController.getProgressByTopicId);
ProgressRouter.post(
  "/",
  validateToken,
  createProgressValidation,
  ProgressController.create
);
// ProgressRouter.put(
//   "/:chapterId",
//   validateToken,
//   validateChapterIdParams,
//   updateChapterValidation,
//   ProgressController.update
// );
// ProgressRouter.delete(
//   "/:todoId",
//   validateToken,
//   validator.validateParams,
//   controllers.deleteTodo
// );

export default ProgressRouter;