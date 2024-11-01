const User = require("../../services/users/users.model");
const crypto = require("crypto");
const hashPassword = require("../../../../shared/hashPassword.utils");

class UserRepository {
  async create(data) {
    const newUser = new User({
      _id: crypto.randomUUID(),
      username: data.username,
      password_hash: await hashPassword(data.password),
      created_at: Date.now(),
    });
    await newUser.save();
  }

  async findAll() {
    const allUsers = await User.find({});
    return allUsers;
  }

  async findOne(id) {
    const user = await User.findById(id)
    return user
  }

  async remove(id) {
    await User.findByIdAndDelete(id)
    return
  }

  async update(id, data) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { 
        username: data.username,
        password_hash: await hashPassword(data.password)
      },
      { new: true }
    );
    return updatedUser;
  }

}

module.exports = UserRepository;
