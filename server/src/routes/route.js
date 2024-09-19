import { Router } from "express";
import authenticationRouter from "./authentication.js";
import topicRouter from "./topic.js";
import chapterRoute from "./chapter.js";
import problemRouter from "./problem.js";
import ProgressRouter from "./progress.js";

const router = Router();

router.use('/authentication', authenticationRouter);
router.use('/topic', topicRouter);
router.use('/chapter', chapterRoute);
router.use('/problem', problemRouter);
router.use('/progress', ProgressRouter);

export default router;
