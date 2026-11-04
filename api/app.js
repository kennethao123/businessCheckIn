const express = require('express');
const cors = require("cors");
const app = express();
require("dotenv").config();

//if getting data from json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Queue System - listening on port 3000")
})
