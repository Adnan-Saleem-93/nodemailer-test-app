const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "adnansaleem.dev@gmail.com",
    pass: "zvji lvrs dawk vuqa",
  },
  secure: true,
});

const mailData = {
  from: "adnansaleem.dev@gmail.com", // sender address
  to: "yonidop795@acpeak.com", // list of receivers
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: `<b>Hey there! </b>
             <br> This is our first message sent with Nodemailer<br/>`,
};

module.exports = { transporter, mailData };
