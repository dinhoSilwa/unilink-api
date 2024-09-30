import { configDotenv } from "dotenv";
configDotenv();
export const PORT = process.env.PORT || 8080;
export const uri = process.env.MONGO_URI;
