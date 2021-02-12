var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var trumpRouter = require('./routes/index');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api/trump', trumpRouter);

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

module.exports = app;
