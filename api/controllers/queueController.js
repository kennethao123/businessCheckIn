const { getPrisma } = require('../lib/prisma.js');


const checkInPost = async (req, res) => {
    const prisma = req.prisma;
    const response = await prisma.queue.create({
        data: {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
        }
    })
    res.json(response);
}

const checkInDelete = async (req, res) => {
    const prisma = req.prisma;
    const response = await prisma.queue.delete({
        where : {
            id: Number(req.params.id),
        }
    });

    res.json(response);
}

const allQueueGet = async (req, res) => {
    console.log('1. Entered allQueueGet');

    try {
        console.log('2. Before getPrisma');
        const prisma = req.prisma;

        console.log('3. Before findMany');
        const response = await prisma.queue.findMany({
            orderBy: {
                createdAt: 'asc',
            }
        });

        console.log('4. Query succeeded');
        res.json(response);
    } catch (error) {
        console.log('queue get error:', error);
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    checkInPost,
    checkInDelete,
    allQueueGet,
};