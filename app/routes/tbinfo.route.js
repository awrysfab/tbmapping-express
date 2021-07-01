module.exports = app => {
  const tbInfos = require("../controllers/tbinfo.controller.js");

  var router = require("express").Router();

  // Create a new Info
  router.post("/", tbInfos.create);

  // Retrieve all Tutorials
  router.get("/", tbInfos.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tbInfos.findAllPublished);

  // Retrieve a single Info with id
  router.get("/:id", tbInfos.findOne);

  // Update a Info with id
  router.put("/:id", tbInfos.update);

  // Delete a Info with id
  router.delete("/:id", tbInfos.delete);

  // Delete all Tutorials
  router.delete("/", tbInfos.deleteAll);

  app.use('/api/tbInfos', router);
};
