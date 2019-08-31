const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { user } = require('../Database/models.js');

passport.use(new LocalStrategy((username, password, done) => {
  user.find({username: username}, (err, user) => {
    if(err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: "Incorrect username." });
    }
    if(!user.validPassword(password)) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  })
}))

module.exports = passport;