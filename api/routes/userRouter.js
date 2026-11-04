const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');


userRouter.post('/signup', userController.signupPost);
userRouter.post('/login', userController.loginPost);

module.exports = userRouter;