require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port :${PORT}`)
})

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({
    message: "it works!"
  });
});
