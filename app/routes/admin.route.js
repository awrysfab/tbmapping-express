const Admin = require("../models/admin.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const admins = await Admin.findAll(
      // {include: Forum}
      );
    res.status(200).json({
      status: true,
      message: "get list of admins",
      data: admins,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/login", async (req, res) => {
  try {
    const admins = await Admin.findAll(
      // {include: Forum}
      );
    res.status(200).json({
      status: true,
      message: "get list of admins",
      data: admins,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
