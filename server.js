const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("DB Error", err.message);
    process.exit(1);
  });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
