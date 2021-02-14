var express = require('express');
var trumpRouter = express.Router();
const db = require('../db');

/* GET home page. */
trumpRouter.get('/insults', db.getInsults)

module.exports = trumpRouter;
