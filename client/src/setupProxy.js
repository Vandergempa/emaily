const proxy = require('http-proxy-middleware')
 
// Everything that we do on the client side of our applciation can be easily forwarded to our 
// express server regardless of what domain we are currently on. We basically say here to access
// /api or /auth/google relative paths and automatically redirect to our API server (now localhost:5000)
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}