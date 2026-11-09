const userRouter = require('../routes/userRouter.js')
const request = require("supertest");
const express = require("express");
const app = express();
const { test, expect, describe, afterEach } = require('node:test');
const assert = require('node:assert');
const { prisma } = require('../lib/prisma.js')
// const { describe, test, expect, jest } = require('@jest/globals');

app.use(express.urlencoded({ extended: false }));
app.use('/api/user', userRouter)

describe('testing user signup and login', () => {
    afterEach(async () => {
        await prisma.$transaction([
            prisma.user.deleteMany(),
            prisma.queue.deleteMany(),
        ]);
    });

    test("index route works", done => {
        request(app)
            .get('/')
            .expect("Content-Type", /json/)
            .expect(200, done);
    });


    test("signup and login works", async () => {
        try {
            const response = await request(app)
                .post('/api/user/signup')
                .type('form')
                .send({ 'username' : 'a', 'password' : 'a' })
                .expect(200);

            assert.equal(response.body.username, 'a');
            console.log('signup successful')

            const loginResponse = await request(app)
                .post('/api/user/login')
                .type('form')
                .send({ 'username' : 'a', 'password' : 'a' })
                .expect(200);

            assert.equal(loginResponse.body.user.username, 'a')
        } catch (error) {
            console.log('response:', error.message);
            throw error;
        }

    })

})

