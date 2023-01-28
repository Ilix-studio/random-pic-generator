import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo Connected 💖`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
