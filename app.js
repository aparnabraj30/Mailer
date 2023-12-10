require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD, 
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'sanjeevkrishna13x@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'Hi, how are you.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
