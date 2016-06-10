var config = require('../config');
var MANDRILL_APIKEY = config.MANDRILL_APIKEY;

if (!MANDRILL_APIKEY) {
  throw new Error(
    'You must have a Mandrill API key in your environment variables!'
  );
}

var mandrill = require('mandrill-api');

var mandrillClient = new mandrill.Mandrill(MANDRILL_APIKEY);
module.exports = mandrillClient;
