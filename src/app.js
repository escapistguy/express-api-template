const express = require('express');
const routes = require('./routes');

const app = express();

//json & encoding middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API routes register
app.use(routes);

module.exports = app;
