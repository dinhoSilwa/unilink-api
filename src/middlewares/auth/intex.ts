import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import type { NextFunction, Response, Request } from "express";

configDotenv();

const secret = process.env.JWTSECRET;
export type AuthenticatedRequest = Request & {user? :  any}

export const cauthenticateToken = (
  req: Request & {user? : any},
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token Não Fornecido" });
  }

  jwt.verify(token, secret!, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: "Token Inválido" });
    }
    req.user = user;
    next();
  });
};
