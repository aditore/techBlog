const router = require('express').Router();
const apiRoute = require('./api');
const homeRoute = require('./homeRoute');

router.use('/api', apiRoute);
//router.use('/', homeRoute);
//router.use('/dashBoard', dashBoardRoute);

module.exports = router;