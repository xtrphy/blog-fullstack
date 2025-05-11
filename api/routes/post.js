const express = require('express');
const prisma = require('../../prisma/client');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                comments: {
                    include: {
                        user: true,
                    },
                },
            },
        });

        res.status(200).json(post);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error receiving post' });
    }
});

router.post('/:id/comments', authenticateToken, async (req, res) => {
    const { content } = req.body;
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
        });

        const comment = await prisma.comment.create({
            data: {
                content,
                post: {
                    connect: { id }
                },
                user: {
                    connect: { id: req.user.id }
                },
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating comment' });
    }
});

module.exports = router;