import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// Force-load the .env file
dotenv.config({ path: "./.env" });

// Debugging: Print the Mongo URI
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
  .connect(process.env.USER_ID, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
