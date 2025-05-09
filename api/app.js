const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { authenticate, verifyAdmin } = require('./middlewares/authMiddleware');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Auth
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth-status', authenticate);

app.use('/register', registerRouter);
app.use('/login', loginRouter);
// app.use('/logout', logoutRouter);

// Posts
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));