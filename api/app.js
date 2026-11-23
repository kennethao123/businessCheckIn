const express = require('express');
const cors = require("cors");
const app = express();
require("dotenv").config();

const userRouter = require("./routes/userRouter.js");
const queueRouter = require("./routes/queueRouter.js");

//if getting data from json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/queue', queueRouter);


app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Queue System - listening on port 3000")
})
