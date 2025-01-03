var express = require('express');
var v1Router = require('../api/v1');
var router = express.Router();

router.use('/v1', v1Router);

module.exports = router;