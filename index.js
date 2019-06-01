const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// To create the user collection (note that the order of imports are very important!):
require('./models/User');
// Because we just want to run that file, we import it like this (order!):
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
// The purpose of middlewares is to interact with the request.
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
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Making sure that express will serve up production assets, like our main.js or main.css file!
  // We need this because npm build generates production files in specific folders.
  app.use(express.static('client/build'))

  // Express will serve up the index.html file if it doesn't recognize the route. It will assume that
  // react is using routes on the client side.
  // Basically this is a CHATCH-ALL-CASE command here, essentially saying to serve up index.html, if
  // authRoutes, billingRoutes or client/build cannot be found.
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}, no worries.`)
});