import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connection() {
  try {
    // const MONGO_USERNAME = encodeURIComponent(process.env.MONGO_USERNAME!);
    // const MONGO_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD!);
    // const MONGO_HOST = process.env.MONGO_HOST!;
    // const MONGO_DBNAME = process.env.MONGO_DBNAME!;

    await mongoose.connect("mongodb://localhost:27017/ronak");
    //  await mongoose.connect(process.env.MONGO_URI!);


    console.log(`Connected to MongoDB database`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

export default connection;
