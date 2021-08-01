const ClusterAttribute = require("../models/cluster-attribute.model");

const router = require("express").Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const clusterAttributes = await ClusterAttribute.findAll({ include: ["admin", "subdistrict"]});
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
      if (!req.body.year) {
        res.status(400).send({
          message: "Year can not be empty!"
        });
        return;
      }
      const bearerToken = req.headers['authorization'].split(' ');
      const decodedJWT = jwt.verify(bearerToken[1], process.env.JWT_SECRET);
      const clusterAttribute = {
        case: req.body.new_case,
        target_case: req.body.target_case,
        death_rate: req.body.death_rate,
        density: req.body.density,
        healthy_home: req.body.healthy_home,
        year: req.body.year,
        admin_id: decodedJWT.id,
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

  router.put(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      try {
        const id = req.params.id;
        ClusterAttribute.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Cluster attribute was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update cluster attribute with id=${id}.`
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
      ClusterAttribute.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Cluster attribute was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete cluster attribute with id=${id}`
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

module.exports = router;
