const TbInfo = require("../models/tb-info.model");

const router = require("express").Router();
const jwt = require('jsonwebtoken');
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
      res.status(500).send({
        message: "Some error occurred."
      });
    }
  });

router.post(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      if (!req.body.title) {
        res.status(400).send({
          message: "Title can not be empty!"
        });
        return;
      }
      const bearerToken = req.headers['authorization'].split(' ');
      const decodedJWT = jwt.verify(bearerToken[1], process.env.JWT_SECRET);
      const tbinfo = {
        title: req.body.title,
        description: req.body.description,
        admin_id: decodedJWT.id
      };
      TbInfo.create(tbinfo)
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
      TbInfo.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tbinfo was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tbinfo with id=${id}.`
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
