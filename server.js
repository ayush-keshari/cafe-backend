import express from "express";
import mongoose from "mongoose";
import Router from "./routes/userRoute.js";
import dotenv from 'dotenv';
import cors from 'cors';
import { authenticate, authorize } from "./middlewares/auth.js";

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
const dbuser=encodeURIComponent(process.env.DBUSER);
const dbpass=encodeURIComponent(process.env.DBPASS);
// mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.4rzjzfg.mongodb.net/mern-cafe?retryWrites=true&w=majority&appName=Cluster0`).then(() =>   {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

app.use("/api/users", Router);
