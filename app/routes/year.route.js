const Year = require("../models/year.model");

const router = require("express").Router();
const passport = require('passport');

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const years = await Year.findAll();
      res.status(200).json({
        message: "get list of years",
        data: years,
      });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
