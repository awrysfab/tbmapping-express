const TbInfo = require("../models/tb-info.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const tbinfos = await TbInfo.findAll(
      // {include: Forum}
      );
    res.status(200).json({
      status: true,
      message: "get list of tbinfos",
      data: tbinfos,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
