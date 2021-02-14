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
// app.use(express.static(path.join(__dirname, 'Client/build')))
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(express.static(path.join(__dirname, 'Client/build')))
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/api/trump', trumpRouter);

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client/build/index.html'))
})

module.exports = app;
