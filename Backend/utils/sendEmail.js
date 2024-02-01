const nodeMailer = require("nodemailer");

const sendEmail = async ({ options }) => {
  const Transporter = nodeMailer.createTransport({
    service: process.env.SMPT_Service,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_MAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL_SENDER,
    to: email,
    subject,
    text: message,
  };

  await Transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
