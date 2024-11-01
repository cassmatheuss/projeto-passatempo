const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
try {
    let hash = await bcrypt.hash(password, 4)
    return hash
} catch (error) {
    return error
}
}

module.exports = hashPassword