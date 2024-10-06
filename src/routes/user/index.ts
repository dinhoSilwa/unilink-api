import { Router } from "express";
import { UserController } from "../../controller/User";
import upload from "../../utils/multer/multer.config";

export const userRourter = Router();
userRourter.post(
  "/upload-avatar",
  upload.single("file"),
  UserController.createAvatar
);

userRourter.post("/my-profile", UserController.getUserData)
