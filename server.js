import express from "express";
import dotenv from "dotenv";
import router from "./routes/url.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI environment variable is required');
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const port = process.env.SERVER_PORT || 3000;
app.use(cors({ 
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://localhost:5171']
}));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
