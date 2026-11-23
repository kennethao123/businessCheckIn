const express = require('express');
const cors = require("cors");

const userRouter = require("./routes/userRouter.js");
const queueRouter = require("./routes/queueRouter.js");

function createApp(env) {
    const app = express();

    //if getting data from json
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.get('/api/health', (req, res) => {
        res.status(200).json({
            status: 'ok',
            message: 'Business Check-In API is running'
        });
    });
    app.use('/api/user', userRouter);
    app.use('/api/queue', queueRouter);
    return app;
}



module.exports = createApp;
//a