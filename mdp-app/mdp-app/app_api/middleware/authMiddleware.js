// impor jsonwebtoken
const jwt = require("jsonwebtoken")

// verifikasi jwttoken
const authMiddleware = (req, res, next) => {
    // ambil token dari Bearer [0] token [1]
    const token = req.header("Authorization")?.split(" ")[1];

    // jika tidak ada token
    if(!token) {
        return res.status(401).json({
            message: "No token, authorization"
        });
    }

    // jika ada token
    try {
        // verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Token is not valid"
        });

    }
}