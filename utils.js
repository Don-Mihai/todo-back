import nodemailer from "nodemailer";

// Настройка транспортера для nodemailer
export const transporter = nodemailer.createTransport({
  host: process.env.HOST, // Например, smtp.gmail.com
  port: process.env.PORT_EMAIL, // Например, 465 для secure
  secure: process.env.SECURE === "true" ? true : false, // true, если используется SSL
  auth: {
    user: process.env.AUTHOR_EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
  tls: {
    rejectUnauthorized: false, // Отключает проверку SSL-сертификата
  },
});
