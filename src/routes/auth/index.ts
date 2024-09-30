import { Router } from "express";
import { AuthController } from "../../controller/authController";

export const authRouter = Router();
authRouter.post("/", AuthController.registerUserAuth);
