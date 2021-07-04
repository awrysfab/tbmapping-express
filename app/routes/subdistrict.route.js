const Subdistrict = require("../models/subdistrict.model");

const router = require("express").Router();
const passport = require('passport');

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const subdistricts = await Subdistrict.findAll();
      res.status(200).json({
        message: "get list of subdistricts",
        data: subdistricts,
      });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
