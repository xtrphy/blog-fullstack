const express = require('express');
const prisma = require('../../prisma/client');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true,
            },
            include: {
                author: true
            }
        });
        res.status(201).json(posts);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error receiving posts' });
    }
});

router.post('/', authenticateToken, async (req, res) => {
    const { title, content, authorId } = req.body;

    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId,
            }
        });

        res.status(201).json(post);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creating post' });
    }

});

module.exports = router;