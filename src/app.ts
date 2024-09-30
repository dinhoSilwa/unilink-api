import express, { Application } from "express";
import cors from "cors";
import { authRouter } from "./routes/auth";
export const app: Application = express();
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/auth", authRouter);

export default app;
