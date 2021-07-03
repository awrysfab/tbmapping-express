const Admin = require("../models/admin.model");

const router = require("express").Router();
const jwt = require('jsonwebtoken');

router.get("/", async (req, res) => {
  try {
    const admins = await Admin.findAll(
      // {include: Forum}
      );
    res.status(200).json({
      status: true,
      message: "get list of admins",
      data: admins,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req);
  const userWithEmail = await Admin.findOne({ where: { email } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );
  if (!userWithEmail) {
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });
  }
  if (userWithEmail.password !== password) {
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });
  }
  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );
  res.json({ message: 'Welcome Back!', token: jwtToken });
});

module.exports = router;
