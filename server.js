const express = require('express');
const app = express();
const routes = require('./routes');

// routes
app.use('/v1', routes);

module.exports = app;
