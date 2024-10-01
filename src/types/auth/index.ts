import { Document } from "mongoose";
export interface Iauth extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Iauthcredentials {
  email: string;
  password: string;
}
