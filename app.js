const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3001;
require('dotenv').config();
const routes = require("./app/routes");

const sequelize = require("./config/database");

// sequelize.sync();

// sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use("/api", routes);
app.listen(port, () => console.log(`run in port ${port}`));
