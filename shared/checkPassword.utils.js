const bcrypt = require('bcrypt');

const checkPassword = async(password, passwordHash) => {
    let compare = await bcrypt.compare(password, passwordHash);
    return compare
}

module.exports = checkPassword