var localtunnel = require('localtunnel');
var subdomain = 'tomitomitomitomi'
localtunnel(5000, { subdomain: subdomain }, function(err, tunnel) {
  console.log(`LT is running on https://${subdomain}.localtunnel.me`)
});