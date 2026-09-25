const express = require("express");
const {
  createFarmAssessment,
} = require("../controllers/farmAssessmentController");

const router = express.Router();

router.post("/", createFarmAssessment);

module.exports = router;