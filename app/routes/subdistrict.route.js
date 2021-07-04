const Subdistrict = require("../models/subdistrict.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const subdistricts = await Subdistrict.findAll(
      // {include: Forum}
      );
    res.status(200).json({
      message: "get list of subdistricts",
      data: subdistricts,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
