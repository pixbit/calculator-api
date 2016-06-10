(function() {
  'use strict';
  /* globals require,console */
  // jscs:disable jsDoc

  // core modules
  var process = require('process');

  // npm modules
  var bodyParser = require('body-parser');
  var chalk = require('chalk');
  var express = require('express');
  var morgan = require('morgan');

  var config = require('./lib/api/v1/config');
  var app = express();

  var apiV1 = require('./lib/api/v1');

  app
    .use(morgan('dev'))
    .use(bodyParser.json({limit: '50mb'}))
    .use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    .get('/api/v1', sendOkay)
    .use('/api/v1', apiV1)
    .listen(config.PORT);

  console.log(chalk.cyan(`Express server listening on port ${config.PORT}...`));

  function sendOkay(req, res) {
    res.status(200).json({status: 'up'});
  }

}());
