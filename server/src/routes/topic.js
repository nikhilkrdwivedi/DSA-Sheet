import { Router } from "express";
import { TopicController } from "../controllers/controller.js";
import { createTopicValidation, updateTopicValidation, validateTopicIdParams } from "../middlewares/middleware.js";
import { validateToken } from "../middlewares/middleware.js";
const topicRouter = Router();

topicRouter.get("/", validateToken, TopicController.getTopics);
topicRouter.get("/:topicId", validateToken, validateTopicIdParams, TopicController.getTopic);
topicRouter.post("/", validateToken, createTopicValidation, TopicController.create);
topicRouter.put("/:topicId", validateToken, validateTopicIdParams, updateTopicValidation, TopicController.update);

export default topicRouter;