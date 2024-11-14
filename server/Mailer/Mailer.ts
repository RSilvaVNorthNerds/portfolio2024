import nodemailer from "nodemailer";

class Mailer {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
  }

  sendEmail() {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Hello from Node.js and Outlook!",
      text: "This is a test email from Node.js!",
      html: "<b>This is a test email from Node.js!</b>",
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  }
}

export default Mailer;
