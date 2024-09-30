import type { Request, Response } from "express";
import { AuthService } from "../../service/auth";

export class AuthController {
  static async registerUserAuth(req: Request, res: Response): Promise<void> {
    try {
      const userAuth = await AuthService.authRegister(req.body);
      res.status(201).json({ userAuth });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}
