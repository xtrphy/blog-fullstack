const express = require('express');
require('dotenv').config();

const authMiddleware = require('./middlewares/authMiddleware');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');

const app = express();
app.use(express.json());

// Auth
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// Posts
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));