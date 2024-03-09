import 'dotenv/config'
// require('dotenv').config()
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

// dotenv.config({
//   path: "./env",
// });

connectDB();
/*
import express from "express";
const app = express();

//iff ka use kiye hai

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERR", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
*/
