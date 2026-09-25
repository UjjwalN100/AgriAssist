require("dotenv").config();

const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const farmAssessmentRoutes = require("./routes/farmAssessmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/farm-assessment", farmAssessmentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to AgriAssist API",
  });
});

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`AgriAssist server is running on port ${PORT}`);
});