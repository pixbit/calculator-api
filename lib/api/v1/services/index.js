var Router = require('express').Router();

var sendEmail = require('./sendEmail');

function consoleLogIt(req, res) {
  console.log('req.body: ', req.body);
  res.json(req.body);
}

Router
  // .post('/email', sendEmail)
  .post('/email', consoleLogIt)
  .use(servicesErrorHandler);

module.exports = Router;

// jshint unused:false
// keep the line above, the function's arity (# of arguments) lets
// express know that it's an error-handler middleware
function servicesErrorHandler(err, req, res, next) {
  console.error('Error within the services router', err);
  res.json({error: err});
}
