const express = require('express');
require('dotenv').config();

const authMiddleware = require('./middlewares/authMiddleware');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();
app.use(express.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: `Hello, user ${req.user.userId} with role ${req.user.role}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));