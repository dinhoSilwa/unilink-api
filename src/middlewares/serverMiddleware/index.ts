import cors from "cors";
import express, { type Application } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { corsOptions } from "./corsOptions";
import { limitConfig } from "./rateLimitsOptions";

const limiter = rateLimit(limitConfig);

export const serverMiddlewares = (app: Application) => {
  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(express.json());
  app.use(rateLimit(limiter as any));
};
