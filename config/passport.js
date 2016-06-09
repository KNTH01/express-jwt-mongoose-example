let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let User = require('../models/User');
let config = require('../config/');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.auth.secret
  };

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({
      id: jwt_payload.id
    }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
