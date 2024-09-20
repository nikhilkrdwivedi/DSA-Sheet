import { Router } from "express";
import { ChapterController } from "../controllers/controller.js";
import { validateTopicIdParams, createChapterValidation, updateChapterValidation, validateChapterIdParams } from "../middlewares/middleware.js";
import { validateToken } from "../middlewares/middleware.js";
const chapterRouter = Router();

chapterRouter.get("/", validateToken, ChapterController.getChapters);
chapterRouter.get("/:chapterId", validateToken, validateChapterIdParams, ChapterController.getChapter);
chapterRouter.get("/topic/:topicId", validateToken, validateTopicIdParams, ChapterController.getChaptersByTopicId);
chapterRouter.post("/", validateToken, createChapterValidation, ChapterController.create);
chapterRouter.put("/:chapterId", validateToken, validateChapterIdParams, updateChapterValidation, ChapterController.update
);

export default chapterRouter;