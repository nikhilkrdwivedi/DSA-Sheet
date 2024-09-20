import { Router } from "express";
import { ProblemController } from "../controllers/controller.js";
import { validateTopicIdParams, createProblemValidation, updateProblemValidation, validateProblemIdParams } from "../middlewares/middleware.js";
import { validateToken } from "../middlewares/middleware.js";
const problemRouter = Router();

problemRouter.get("/", validateToken, ProblemController.getProblems);
problemRouter.get("/:problemId", validateToken, validateProblemIdParams, ProblemController.getProblem);
problemRouter.get("/chapter/:chapterId", validateToken, validateTopicIdParams, ProblemController.getProblemsByTopicId);
problemRouter.post("/", validateToken, createProblemValidation, ProblemController.create);
problemRouter.put("/:problemId", validateToken, validateProblemIdParams, updateProblemValidation, ProblemController.update);

export default problemRouter;