function checkIfAdmin(admin) {
    return (req, res, next) => {
        if (!req.user || !admin.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
}

module.exports = checkIfAdmin;