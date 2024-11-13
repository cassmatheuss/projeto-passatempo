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
        html: `
        <h1> ☀️ Preenchimento de formulário - ${data.nome_escola}</h1> <br />
          <h2>Informações da Escola</h2> <br />
            <b>Nome da escola - </b> <span>${data.nome_escola}</span> <br />
            <b>Endereço - </b> <span>${data.endereco}</span> <br />
            <b>Telefone - </b> <span>${data.telefone_escola}</span> <br />
            <b>Email - </b> <span>${data.email_escola}</span> <br />
          <h2>Informações do Representante</h2> <br />
            <b>Nome do Representante - </b> <span>${data.nome_representante}</span> <br />
            <b>Cargo do Representante - </b> <span>${data.cargo_representante}</span> <br />
            <b>Telefone do Representante - </b> <span>${data.telefone_representante}</span> <br />
            <b>Email do Representante- </b> <span>${data.email_representante}</span> <br />

            
        `,
    }, (error, info) => {
        if(error) {
            return console.log(error);
        }
        console.log('Message sent');
    });
};


module.exports = sendFormulário