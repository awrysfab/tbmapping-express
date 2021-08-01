const HealthFacility = require("../models/health-facility.model");

const router = require("express").Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const healthFacilities = await HealthFacility.findAll({ include: ["admin", "subdistrict"] });
      res.status(200).json({
        message: "get list of healthFacilities",
        data: healthFacilities,
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
      if (!req.body.name) {
        res.status(400).send({
          message: "Name can not be empty!"
        });
        return;
      }
      const bearerToken = req.headers['authorization'].split(' ');
      const decodedJWT = jwt.verify(bearerToken[1], process.env.JWT_SECRET);
      const healthFacility = {
        name: req.body.name,
        address: req.body.address,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        admin_id: decodedJWT.id,
        subdistrict_id: req.body.subdistrict_id
      };
      HealthFacility.create(healthFacility)
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

router.put(
  "/:id",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      HealthFacility.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Health facility was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update health facility with id=${id}.`
            });
          }
        })
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Some error occurred."
      });
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      HealthFacility.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Health facility was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete health facility with id=${id}`
            });
          }
        })
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Some error occurred."
      });
    }
  }
);

router.get(
  "/data",
  async (req, res) => {
    try {
      const healthFacilities = await HealthFacility.findAll({ include: ["admin", "subdistrict"] });
      res.status(200).json({
        message: "get list of healthFacilities",
        data: healthFacilities,
      });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
