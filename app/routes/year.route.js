const Year = require("../models/year.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const years = await Subdistrict.findAll();
    res.status(200).json({
      message: "get list of years",
      data: years,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
