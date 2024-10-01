import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

const secret = process.env.JWTSECRET;
const expires = process.env.JWT_EXPIRES_IN;

export const createToken = async (findUser: any) => {
  const token = jwt.sign(
    {
      id: findUser._id,
      name: findUser.name,
      email: findUser.email,
    },
    secret!,
    {
      expiresIn: expires!,
    }
  );

  return await { token };
};
