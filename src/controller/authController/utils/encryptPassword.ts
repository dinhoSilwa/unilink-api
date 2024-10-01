import bcrypt from "bcryptjs";

export const encryptPassword = async (pass: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(pass, salt);
  return hashedPassword;
};

export const comparePasswords = async (
  pass: string,
  hashedPassword: any
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(pass, hashedPassword);
  return isMatch;
};
