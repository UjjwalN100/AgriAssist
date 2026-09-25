const mongoose = require("mongoose");

const farmAssessmentSchema = new mongoose.Schema(
  {
    crop: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    irrigation: {
      type: String,
      required: true,
    },
    need: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "FarmAssessment",
  farmAssessmentSchema
);