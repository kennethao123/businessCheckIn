const { prisma } = require('../lib/prisma.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signupPost = async ( req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hashedPassword
        }
    })

    res.json(user);
}

const loginPost = async ( req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username,
            }
        });

        //compare hashed password
        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) {
            res.status(401).json({ message : "Wrong Password" });
        }

        //matched
        console.log('Login Successful')
        jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: "4h" }, (err, token) => {
            res.json({token, user});
        });
    } catch (error) {
        res.status(401).json({ message : error.message });
    }
}


module.exports = {
    signupPost,
    loginPost
}