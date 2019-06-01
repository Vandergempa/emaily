const keys = require('../config/keys');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const stripe = require('stripe')(
  keys.stripeSecretKey
);

// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

// If we want only, explicitly this route handler to run this middleware, we add it as a second
// argument to the function, followed by the actual request handling function as the third argument.
module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {

    // We get the token passed on to the server from the front-end, created by StripeCheckout:
    const { token, amount, description } = req.body;
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      description: description,
      source: token.id,
    }/* , postStripeCharge(res) */);

    // Req.user is set up automatically by passport, so we don't have to query the database again.
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  })
};

// const User = mongoose.model('users');
// User.find({ }, (err, results) => {
//   console.log(results)
// })
