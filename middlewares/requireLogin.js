// Next is going to pass the request down to the next middleware in the chain.
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must be logged in to make requests!' })
  }
  // If there is a user, everything is fine, passing req down to the next middleware.
  next();
}