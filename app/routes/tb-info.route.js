const TbInfo = require("../models/tb-info.model");

const router = require("express").Router();
const passport = require('passport');

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const tbinfos = await TbInfo.findAll(
      );
      res.status(200).json({
        message: "get list of tbinfos",
        data: tbinfos,
      });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
