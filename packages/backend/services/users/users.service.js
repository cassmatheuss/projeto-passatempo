const UserRepository = require('./users.repository')

class UserService {
    constructor() {
        this.userRepository = new UserRepository()
    }

    async create(data) {
        try {
            return this.userRepository.create(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserService