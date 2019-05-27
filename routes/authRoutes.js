const passport = require('passport');

module.exports = (app) => {
    // By defining 'google' the app knows to use GoogleStrategy as 'google' is an internal identifier
    app.get(
        '/auth/google', passport.authenticate('google', {
            // These are the permissions that we can ask for from the user:
            scope: ['profile', 'email']
        })
    );

    // By defining this route handler, we pass the previously obtained code back to google so that
    // we can obtain the profile in exchange for the code:
    app.get(
        '/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        // logout is attached automatically to the request object by passport
        req.logout();
        // sending back null or undefined as we are looged out, having no req.users
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
