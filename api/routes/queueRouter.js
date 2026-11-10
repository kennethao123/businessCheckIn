
const express = require('express');
const queueRouter = express.Router();
const queueController = require('../controllers/queueController.js');
const passport = require('passport');

queueRouter.post('/checkin', queueController.checkInPost);
queueRouter.delete('/deleteCheckin/:id', passport.authenticate("jwt", { session : false }), queueController.checkInDelete);

module.exports = queueRouter;