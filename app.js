'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const errorHandler = require('./middlewares/errorHandler');
const catch404 = require('./middlewares/catch404');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(catch404);

// error handler
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));