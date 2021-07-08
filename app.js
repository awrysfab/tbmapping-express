require('dotenv').config();
require('./app/auth/passport');

const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3001;
const routes = require("./app/routes");

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const sequelize = require("./config/database");

// sequelize.sync();

app.use("/api", routes);
app.listen(port, () => console.log(`run in port ${port}`));
