const { prisma } = require('../lib/prisma.js');


const checkInPost = async (req, res) => {
    const response = await prisma.queue.create({
        data: {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
        }
    })
    res.json(response);
}

const checkInDelete = async (req, res) => {
    const response = await prisma.queue.delete({
        where : {
            id: Number(req.params.id),
        }
    });

    res.json(response);
}

const allQueueGet = async (req, res) => {
    const response = await prisma.queue.findMany({
        orderBy: {
            createdAt: 'asc',
        }
    });
    res.json(response);
}

module.exports = {
    checkInPost,
    checkInDelete,
    allQueueGet,
};