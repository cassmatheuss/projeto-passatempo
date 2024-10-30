const Text = require("../../services/texts/texts.model");

class TextRepository {


  async create(data) {
    const newText = new Text({
      _id: data.id,
      text: data.text
    });
    await newText.save();
    return
  }

  async findAll() {
    const allTexts = await Text.find({});
    return allTexts;
  }

  async findOne(id) {
    const text = await Text.findById(id)
    return text
  }

  async remove(id) {
    await Text.findByIdAndDelete(id)
    return
  }

}

module.exports = TextRepository;
