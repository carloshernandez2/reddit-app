require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const passport = require("passport");
const session = require("express-session");

const trumpRouter = require('./routes/index');

const app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production'? process.env.LOCALHOST : ["http://localhost:3000", "http://localhost:5000"], // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passport")(passport);


// view engine setup
// app.use(express.static(path.join(__dirname, 'Client/build')))
if (process.env.NODE_ENV === 'production') {
  // only use in development
  app.use(express.static(path.join(__dirname, 'Client/build')))
}

require("./routes/session")(app, passport);
app.use('/api/trump', trumpRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client/build/index.html'))
})

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

module.exports = app;
