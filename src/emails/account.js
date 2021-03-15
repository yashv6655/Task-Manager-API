require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "bearta.josh@gmail.com",
  from: "bearta.josh@gmail.com",
  subject: "First email from sendgrid",
  text: "It works",
});
