const queueRouter = require('../routes/queueRouter.js')
const userRouter = require('../routes/userRouter.js')
const request = require("supertest");
const express = require("express");
const app = express();
const { test, expect, describe, afterEach, after } = require('node:test');
const assert = require('node:assert');
const { prisma } = require('../lib/prisma.js')

app.use(express.urlencoded({ extended: false}));
app.use('/api/queue', queueRouter);
app.use('/api/user', userRouter);

afterEach( async () => {
    const response = await prisma.queue.deleteMany()
})

after(async () => {
    await prisma.$disconnect();
    console.log('prisma disconnected');
})

describe('person checks in', () => {
    test("check in", async () => {
        try {
            const response = await request(app)
                .post('/api/queue/checkin')
                .type('form')
                .send({ 'name' : 'a', 'phoneNumber' : '1111111111'})

            assert.equal(response.body.name, 'a')
            assert.equal(response.body.phoneNumber, '1111111111')

        } catch (error) {
            console.log('response:', error.message);
            throw error;
        }
    })
})

describe('logged in user deletes checkin', () => {
    test('delete checkin', async () => {
        try {
            const row = await request(app)
                .post('/api/queue/checkin')
                .type('form')
                .send({ 'name' : 'a', 'phoneNumber' : '1111111111'})
            assert.equal(row.body.name, 'a');

            const login = await request(app)
                .post('/api/user/login')
                .type('form')
                .send({ 'username' : 'a', 'password' : 'a'})

            console.log('login body', login.body);
            const response = await request(app)
                .delete(`/api/queue/deleteCheckin/${row.body.id}`)
                .set('Authorization', `Bearer ${login.body.token}`)

            const queue = await prisma.queue.findUnique({
                where : {
                    id : Number(row.body.id)
                }
            });

            assert.equal(queue, null);

        } catch (error) {
            console.log('response:', error.message);
            throw error;
        }
    })

})