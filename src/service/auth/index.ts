import type { Iauth, Iauthcredentials } from "../../types/auth";
import { UserAuthModel } from "../../models/auth";
import {
  comparePasswords,
  encryptPassword,
} from "../../controller/authController/utils/encryptPassword";
import { createToken } from "../../controller/authController/jwt/token";

export class AuthService {
  static async authRegister(user: Iauth): Promise<Iauth> {
    const { name, email, password } = user;
    const encrypt = await encryptPassword(password);
    const newauthUser = { name, email, password: encrypt };
    const userAuth = new UserAuthModel(newauthUser);
    return await userAuth.save();
  }
  static async authcredentials(user: Iauthcredentials): Promise<any> {
    const { email, password } = user;
    const findUser = await UserAuthModel.findOne({ email });
    if (!findUser) {
      return { msg: "Usuário não Encontrado" };
    }
    const isMatch = await comparePasswords(password, findUser?.password);

    if (!isMatch) {
      return { msg: "Senha incorreta" };
    }
    return createToken(findUser);
  }
}
