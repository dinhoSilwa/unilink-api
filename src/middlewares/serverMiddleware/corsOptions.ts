import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: "*",
  methods: ["POST", "GET", "PUT", "DELETE"],
  allowedHeaders: ["Content-type", "Authorization"],
};
