import { Router } from "express";
import { AuthController } from "../../controller/authController";

export const authRouter = Router();
authRouter.post("/register", AuthController.registerUserAuth);
authRouter.post("/login", AuthController.authcredentials);
