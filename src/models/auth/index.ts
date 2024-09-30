import mongoose, { Schema } from "mongoose";

export const authSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserAuthModel = mongoose.model("User", authSchema);
