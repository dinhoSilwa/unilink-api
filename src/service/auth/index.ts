import type { Iauth } from "../../types/auth";
import { UserAuthModel } from "../../models/auth";

export class AuthService {
  static async authRegister(user: Iauth): Promise<Iauth> {
    const userAuth = new UserAuthModel(user);
    return await userAuth.save();
  }
}
