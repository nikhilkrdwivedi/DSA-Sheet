import { Router } from "express";
import { UserAuthController } from "../controllers/controller.js";
import { loginValidation, registerValidation } from "../middlewares/middleware.js";
const authenticationRouter = Router();

authenticationRouter.post("/register", registerValidation, UserAuthController.register);
authenticationRouter.post("/login", loginValidation, UserAuthController.login);
authenticationRouter.post("/logout", UserAuthController.logout);
authenticationRouter.get("/validate-token", UserAuthController.validateToken);

export default authenticationRouter;