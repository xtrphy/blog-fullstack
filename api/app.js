const express = require('express');
require('dotenv').config();
const cors = require('cors');

const authenticateToken = require('./middlewares/authMiddleware');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');
const postRouter = require('./routes/post');

const app = express();

const allowedOrigins = [
    'https://resonant-starship-05112e.netlify.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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