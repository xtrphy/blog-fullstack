const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../prisma/client');

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: passwordHash,
                role: 'READER',
            },
        });

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({ token, message: 'User registered successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Registration failed' });
    }
});

module.exports = router;