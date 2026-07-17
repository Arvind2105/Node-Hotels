// Doing authentication and authorization using Passport.js
// for this we need a validation function to check username and password.

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Person from '../models/persons.js';
// import comparePassword from '../models/persons.js'

passport.use(
  new LocalStrategy(async (USERNAME, PASSWORD, done) => {
    //authentication logic....
    try {
      // console.log('Recieved Credentials', USERNAME, PASSWORD);
      //checking the username in db
      const user = await Person.findOne({ username: USERNAME });
      //if user not exists.
      if (!user) {
        //done takes 3 params done(error, user, info)
        // auth successfull -> done(null, user)
        // auth fails -> done(null, false , {message: some message})
        return done(null, false, { message: 'Incorrect username.' });
      }

      // Now check for password - >
      const isPasswordMatch = user.comparePassword(PASSWORD);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    } catch (err) {
      return done(err);
    }
  }),
);

export default passport;