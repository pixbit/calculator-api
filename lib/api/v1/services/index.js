var request = require('request');
var Router = require('express').Router();
var config = require('../config');

function zapIt(req, res, next) {
  request({
    url: config.ZAPIER.WEBHOOK_URL,
    method: 'POST',
    json: req.body
  }, function(error, response, body){
    if(error) {
      console.log(error);
      next(err);
    } else {
      console.log(response.statusCode, body);
      res.send(response.body);
    }
  });
}

Router
  .post('/zapIt', zapIt)
  .use(servicesErrorHandler);

module.exports = Router;

// jshint unused:false
// keep the line above, the function's arity (# of arguments) lets
// express know that it's an error-handler middleware
function servicesErrorHandler(err, req, res, next) {
  console.error('Error within the services router', err);
  res.json({error: err});
}
