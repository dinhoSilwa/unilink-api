import mongoose, { Schema } from "mongoose";
import type { Iauth } from "../../types/auth";

export const authSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export const UserAuthModel = mongoose.model<Iauth>("User", authSchema);
