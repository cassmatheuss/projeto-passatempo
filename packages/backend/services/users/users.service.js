const UserRepository = require("./users.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    return this.userRepository.create(data);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id) {
    return this.userRepository.findOne(id);
  }
  
  async remove(id) {
    return this.userRepository.remove(id);
  }

  async update(id, data) {
    return this.userRepository.update(id, data);
  }

  async verifyToken(token) {
    return this.userRepository.verifyToken(token)
  }


}

module.exports = UserService;
