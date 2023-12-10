require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, 
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'aparnabraj2019@gmail.com',
  subject: 'Nodemailer',
  text: 'Greetings from NodeMailer',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
