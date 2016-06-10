var cors = require('cors');

var Router = require('express').Router();

var corsOptions = {
  origin: '*',
  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
  ],
  allowedHeaders: [
    'X-Requested-With',
    'Content-type',
    'Authorization'
  ]
};

var services = require('./services/');

Router
  .use(cors(corsOptions))
  .use('/services', services);

module.exports = Router;
