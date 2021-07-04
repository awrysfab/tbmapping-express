const ClusterAttribute = require("../models/cluster-attribute.model");

const router = require("express").Router();
const passport = require('passport');

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const clusterAttributes = await ClusterAttribute.findAll(
      );
      res.status(200).json({
        message: "get list of clusterAttributes",
        data: clusterAttributes,
      });
    } catch (error) {
      console.error(error);
    }
  });

router.post(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      if (!req.body.subdistrict_id) {
        res.status(400).send({
          message: "Subdistrict can not be empty!"
        });
        return;
      }
      if (!req.body.year_id) {
        res.status(400).send({
          message: "Year can not be empty!"
        });
        return;
      }
      const bearerToken = req.headers['authorization'].split(' ');
      const decodedJWT = jwt.verify(bearerToken[1], process.env.JWT_SECRET);
      const clusterAttribute = {
        case: req.body.case,
        target_case: req.body.target_case,
        death_rate: req.body.death_rate,
        density: req.body.density,
        healthy_home: req.body.healthy_home,
        admin_id: decodedJWT.id,
        year_id: req.body.year_id,
        subdistrict_id: req.body.subdistrict_id,
      };
      ClusterAttribute.create(clusterAttribute)
        .then(data => {
          res.status(200).send({
            message: "Data successfully added!",
            data: data
          });
        })
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Some error occurred."
      });
    }
  });

module.exports = router;
