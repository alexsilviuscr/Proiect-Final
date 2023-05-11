import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

dotenv.config();

const app = express();
const mongoKey = process.env.MONGO_KEY;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(mongoKey);

app.listen(3001, () => console.log("Server running on port 3001"));