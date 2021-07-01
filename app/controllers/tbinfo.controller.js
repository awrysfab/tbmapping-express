const db = require("../models");
const Info = db.tbInfos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can not be empty!"
    });
    return;
  }
  const info = {
    title: req.body.title,
    description: req.body.description
  };
  Info.create(info)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Info."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Info.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Info.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Info with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Info.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Info was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Info with id=${id}. Maybe Info was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Info with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Info.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Info was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Info with id=${id}. Maybe Info was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Info with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Info.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};
