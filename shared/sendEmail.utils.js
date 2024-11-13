const nodemailer = require("nodemailer");

EMAIL = process.env.PASSATEMPO_EMAIL
PASSWORD = process.env.PASSATEMPO_PASSWORD

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  }
  }); 

  const sendFormulário = (data) => {
    transporter.sendMail({
        from: EMAIL, 
        to: data.email,
        subject: `Contato - ${data.nome_escola}`, 
        text: `Formulário preenchido por ${data.nome_escola}`,
        html: "<b>Hello world?</b>",
    }, (error, info) => {
        if(error) {
            return console.log(error);
        }
        console.log('Message sent');
    });
};


module.exports = sendFormulário