var express = require('express');
var trumpRouter = express.Router();
const db = require('../db');
const {checkSession} = require('../middleware/middleware')

/* GET home page. */
trumpRouter.get('/insults', checkSession, db.getInsults)

module.exports = trumpRouter;
