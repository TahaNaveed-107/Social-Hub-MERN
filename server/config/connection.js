import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://TahaNaveed:tahanaveed.107@book-store-mern.ycfgg.mongodb.net/`
    );
    console.log("Connected to mongo DB Successfully");
  } catch (error) {
    console.log("Connection Failed: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
