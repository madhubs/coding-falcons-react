const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id) //findbyid is a mongoose method
        .then(user => {
          if (user) {
            return done(null, user); //if user is found return the done function. params= error which there arent any so it's null
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
      //   console.log(jwt_payload);
    })
  );
};
