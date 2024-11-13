const Email = require("../../services/email/email.model");
const sendEmail = require("../../../../shared/sendEmail.utils")
class EmailRepository {

  async create(data) {
    const newEmail = new Email({
      _id: data.id,
      email: data.email
    });
    await newEmail.save();
    return
  }

  async findAll() {
    const allEmails = await Email.find({});
    return allEmails;
  }

  async findOne(id) {
    const email = await Email.findById(id)
    return email
  } 

  async remove(id) {
    await Email.findByIdAndDelete(id)
    return
  }

  async update(id, newEmail) {
    const updatedEmail = await Email.findByIdAndUpdate(
      id,
      { email: newEmail },
      { new: true }
    );
    return updatedEmail;
  }

  async sendEmailContato(data) {
    sendEmail(data)
    return
  }

}

module.exports = EmailRepository;
