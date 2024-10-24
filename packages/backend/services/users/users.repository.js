const User = require('../../services/users/users.model')
const crypto = require("crypto");
const hashPassword = require('../../../../shared/hashPassword.utils')

class UserRepository {
    async create(data) {
        try {
            const newUser = new User({
                _id: crypto.randomUUID(),
                username: data.username,
                password_hash: await hashPassword(data.password),
                created_at: Date.now()
            })
            await newUser.save()
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserRepository