const UserRepository = require("./users.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    return this.userRepository.create(data);
  }
}

module.exports = UserService;
