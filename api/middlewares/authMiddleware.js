function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.json({ loggedIn: false });

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ loggedIn: true, user: decoded });
    } catch (err) {
        res.json({ loggedIn: false });
    }
};

function verifyAdmin(req, res, next) {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Forbidden: admin only' });
    }
    next();
};

module.exports = { authenticate, verifyAdmin };