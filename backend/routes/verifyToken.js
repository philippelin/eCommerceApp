const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "secretKey", (err, user) => {
            if (err) res.status(403).json("Token invalide !");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("Vous n'êtes pas authentifié!");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("Vous n'etes pas autorisé a faire cela!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("Vous n'etes pas autorisé a faire cela!");
        }
    });
};

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};