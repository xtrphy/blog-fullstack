const express = require('express');
require('dotenv').config();
const cors = require('cors');

const authenticateToken = require('./middlewares/authMiddleware');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');
const postRouter = require('./routes/post');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());


// Verify Token
app.use('/auth-status', authenticateToken, (req, res) => {
    res.json({ message: 'Private data', user: req.user });
});

// Auth
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// Posts
app.use('/posts', postsRouter);
app.use('/post', postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));