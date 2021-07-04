const ClusterAttribute = require("../models/cluster-attribute.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
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

module.exports = router;
