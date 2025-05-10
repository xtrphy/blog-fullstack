const express = require('express');
const prisma = require('../../prisma/client');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
        })

        res.status(200).json(post);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error receiving post' });
    }
});

module.exports = router;