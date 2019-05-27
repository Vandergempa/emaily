const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require("passport");
const keys = require('./config/keys');
// To create the user collection (note that the order of imports are very important!):
require('./models/User');
// Because we just want to run that file, we import it like this (order!):
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// CookieSession extracts the data from the cookie and assigns it to req.session!
app.use(
    cookieSession({
        // maxAge - how long this cookie can exist in the browser before it is automatically expired:
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // keys - a key to encrypt the cookie:
        keys: [keys.cookieKey]
    })
);

// This is a way of telling passport to use our cookies -- to extract it from req.session:
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}, no worries.`)
});