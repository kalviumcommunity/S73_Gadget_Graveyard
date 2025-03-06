require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

// Call connectDB function
connectDB();

// Home Route with Database Connection Status
app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.send(`Database Connection Status: ${dbStatus}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
