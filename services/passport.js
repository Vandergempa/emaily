const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Creating a MODEL CLASS/collection here:
// ONE ARGUMENT MEANS we are trying to FETCH something from the collection.
const User = mongoose.model('users');

// This command will generate a unique identifying piece of information for the user!!!!!!!,
// which will be put into a cookie automatically by passport.
// For the login process we only care about the profile.id, after that it is the user.id
// user.id is the _id, the objectId in the database
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// We get whatever had been in the cookie, now we are turning the id into a mongoose model
// instance.
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // After the user grants permission send the user back to this url:
        callbackURL: '/auth/google/callback',
        // Basically we tell GoogleStrategy that the heroku proxy can be trusted:
        proxy: true,
        // This option tells the strategy to use the userinfo endpoint instead, !! SHOULDN'T BE 
        // NECESSARY WITH THE GOOGLEAUTH20@2 !!
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
        async (accessToken, refreshToken, profile, done) => {
            // Look through the User collection and find the first record with a googleId of 
            // a profile.id.
            const existingUser = await User.findOne({ googleId: profile.id });
            if (existingUser) {
                // we already have a record with the given profile id, we can call done()
                return done(null, existingUser);
            }
            // Creating a MODEL INSTANCE/record here and actually SAVING it to the database:
            const user = await new User({ 
              googleId: profile.id, 
              displayName: profile.displayName,
              email: profile.emails[0].value
            }).save();
            done(null, user);
            
            // console.log('access token', accessToken);
            // console.log('refresh token', refreshToken);
            // console.log('profile', profile);
        })
);