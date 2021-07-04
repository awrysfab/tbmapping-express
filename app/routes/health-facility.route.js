const HealthFacility = require("../models/health-facility.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const healthFacilities = await HealthFacility.findAll(
      );
    res.status(200).json({
      message: "get list of healthFacilities",
      data: healthFacilities,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
