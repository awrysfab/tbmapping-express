const Admin = require("../models/admin.model");

const router = require("express").Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

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
      .status(401)
      .json({ message: 'Email or password does not match!' });
  }
  if (userWithEmail.password !== password) {
    return res
      .status(401)
      .json({ message: 'Email or password does not match!' });
  }
  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );
  res.status(200).json({ message: 'Welcome!', user_id: userWithEmail.id, token: jwtToken });
});

router.get(
  "/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const bearerToken = req.headers['authorization'].split(' ');
    const decodedJWT = jwt.verify(bearerToken[1], process.env.JWT_SECRET);
    try {
      const admin = await Admin.findOne({ where: { id: decodedJWT.id } });
      res.status(200).json({
        message: "get admin",
        data: admin,
      });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
