// Next is going to pass the request down to the next middleware in the chain.
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' })
  }
  // If there are enough credits, everything is fine, passing req down to the next middleware.
  next();
}