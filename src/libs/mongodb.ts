import { connect } from "mongoose";
import { config } from "dotenv";

config();

const { URL_MONGO_DB_ATLAS } = process.env;

const URL_DATABASE = URL_MONGO_DB_ATLAS || "mongodb://localhost:27017/mart-mvp";

export const ConnectionDB = async () => {
  try {
    await connect(URL_DATABASE);
    console.log("● DB is connected");
  } catch (error: any) {
    console.log("● Disconnected to db", error.message);
  }
};
