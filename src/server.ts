import app from "./app";
import { PORT, uri } from "./config/cliente";
import { MongoDBConnection } from "./config/mongo";

const StartServer = async () => {
  try {
    const db = MongoDBConnection.getInstance();
    await db.connect(uri as string);

    app.listen(PORT, () => {
      console.log(`Server is Running on Port : ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting Server", error);
    process.exit(1);
  }
};

StartServer();
