const passport = require('passport');
const passportJwt = require('passport-jwt');

const { ExtractJwt } = passportJwt;
const StrategyJwt = passportJwt.Strategy;
const Admin = require('../models/admin.model');

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    ((jwtPayload, done) => Admin.findOne({ where: { id: jwtPayload.id } })
      .then((admin) => done(null, admin))
      .catch((err) => done(err)))
  )
);
