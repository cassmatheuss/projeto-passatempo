var jwt = require('jsonwebtoken');

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return {
            valid: true,
            expired: false,
            decoded
        };
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return {
                valid: false,
                expired: true,
                decoded: null
            };
        } else {
            return {
                valid: false,
                expired: false,
                decoded: null
            };
        }
    }
}

module.exports = validateToken