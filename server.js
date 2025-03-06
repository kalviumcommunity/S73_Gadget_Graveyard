require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));


app.use("/api", productRoutes); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
