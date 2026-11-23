const express = require('express');
const cors = require("cors");

const userRouter = require("./routes/userRouter.js");
const queueRouter = require("./routes/queueRouter.js");

const { createPrisma, getPrisma } = require('./lib/prisma.js')

function createApp(env) {
    const app = express();
    createPrisma(env);
    const prisma = getPrisma();


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

    app.get('/api/db-health', async (req, res) => {
        try {
            await prisma.$queryRaw`SELECT 1`;

            res.json({ status: 'Database connected' });
        } catch (error) {
            console.error('Database connection failed:', error);

            res.status(500).json({
                status: 'Database connection failed',
                error: error.message
            });
        }
    });
    app.use('/api/user', userRouter);
    app.use('/api/queue', queueRouter);
    return app;
}



module.exports = createApp;