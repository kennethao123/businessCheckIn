
const express = require('express');
const queueRouter = express.Router();
const queueController = require('../controllers/queueController.js');
const passport = require('passport');
require('../config/passport.js')

queueRouter.post('/checkin', queueController.checkInPost);
queueRouter.delete('/deleteCheckin/:id', passport.authenticate("jwt", { session : false }), queueController.checkInDelete);


//temp dev for authenticate
queueRouter.get('/protected', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200).json({
            message: 'Authenticated',
            user: req.user
        })
    })

module.exports = queueRouter;