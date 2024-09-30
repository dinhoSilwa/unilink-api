import { Document } from "mongoose";
export interface Iauth extends Document {
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
