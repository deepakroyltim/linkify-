import express from "express";
import dotenv from "dotenv";
import router from "./routes/url.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = process.env.SERVER_PORT || 3000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
