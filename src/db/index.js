import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`MONGODB Connected !! ${connectionInstance}`); 
    
  } catch (error) {
    console.log("MONGOSB connection error");
    process.exit(1);
  }
};

export default connectDB;
