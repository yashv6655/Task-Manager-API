const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bearta.josh@gmail.com",
    subject: "Welcome to the Email API",
    text: `Welcome to the API service, ${name}`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bearta.josh@gmail.com",
    subject: "Cancelation Email",
    text: `Bye ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
