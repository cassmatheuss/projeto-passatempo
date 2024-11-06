const EmailRepository = require("./email.repository");

class EmailService {
  constructor() {
    this.emailRepository = new EmailRepository();
  }

  async create(data) {
    return this.emailRepository.create(data);
  }

  async findAll() {
    return this.emailRepository.findAll();
  }

  async findOne(id) {
    return this.emailRepository.findOne(id);
  }
  
  async remove(id) {
    return this.emailRepository.remove(id);
  }

  async update(id, newEmail) {
    return this.emailRepository.update(id, newEmail);
  }
  
}

module.exports = EmailService;
