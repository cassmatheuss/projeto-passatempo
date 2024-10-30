const TextRepository = require("./texts.repository");

class TextService {
  constructor() {
    this.textRepository = new TextRepository();
  }

  async create(data) {
    return this.textRepository.create(data);
  }

  async findAll() {
    return this.textRepository.findAll();
  }

  async findOne(id) {
    return this.textRepository.findOne(id);
  }
  
  async remove(id) {
    return this.textRepository.remove(id);
  }

  async update(id, newText) {
    return this.textRepository.update(id, newText);
  }
}

module.exports = TextService;
