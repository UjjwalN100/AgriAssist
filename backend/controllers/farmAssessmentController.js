const FarmAssessment = require("../models/farmAssessment");

const createFarmAssessment = async (req, res) => {
  try {
    const { crop, season, irrigation, need } = req.body;

    if (!crop || !season || !irrigation || !need) {
      return res.status(400).json({
        message: "All assessment fields are required.",
      });
    }

    const assessment = await FarmAssessment.create({
      crop,
      season,
      irrigation,
      need,
    });

    return res.status(201).json({
      message: "Farm assessment saved successfully.",
      assessment,
    });
  } catch (error) {
    console.error("Farm assessment error:", error.message);

    return res.status(500).json({
      message: "Failed to save farm assessment.",
    });
  }
};

module.exports = {
  createFarmAssessment,
};