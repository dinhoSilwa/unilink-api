import express, { Application } from "express";
import cors from "cors";
import { authRouter } from "./routes/auth";
import { userRourter } from "./routes/user";
import { serverMiddlewares } from "./middlewares/serverMiddleware";
export const app: Application = express();

serverMiddlewares(app);
app.use("/api/auth", authRouter);
app.use("/api/user", userRourter);

export default app;
