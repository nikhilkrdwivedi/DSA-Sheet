import mongoose from "mongoose";
import {ENVIRONMENT_CONFIGS} from "../configurations/environment.js";

async function dbConnect() {
  try {
    // Connection With DB
    mongoose.connect(ENVIRONMENT_CONFIGS.DB_URL,);
    console.log(
      `Mongoose default connection is open to ${ENVIRONMENT_CONFIGS.DB_URL}`
    );
  } catch (err) {
    console.log(`Mongoose default connection has occurred ${err} error`);
    process.exit(1);
  }
}

export default dbConnect;