import { users } from "../bd.js";
import { transporter } from "../utils.js";

// Получение пользователей
export const getUsers = async (req, res) => {
  console.log("Запрос на сервер...");
  // отправляем ответ
  res.send(users);
};

// Получение старых пользователей
export const getOldUsers = async (req, res) => {
  console.log("Запрос на сервер...");
  const oldUsers = users.filter((user) => user.age > 25);
  // отправляем ответ
  res.send(oldUsers);
};

// Получение пользователя по айди
export const getUserById = async (req, res) => {
  const id = req.body.id;
  console.log("Запрос на сервер...");
  const user = users.find((user) => user.id == id);

  // отправляем ответ
  res.send(user.name);
};

// Отправка почты
export const sendEmail = async (req, res) => {
  try {
    // Опции письма
    const mailOptions = {
      from: process.env.AUTHOR_EMAIL, // Например: "MyApp <no-reply@myapp.com>"
      to: "chillside32@yandex.ru",
      subject: "Подтвердите свой email",
      text: `Пожалуйста, подтвердите ваш email, перейдя по ссылке`,
      html: `<p>Пожалуйста, подтвердите ваш email, перейдя по ссылке:</p>`,
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);
    res.send("сообщение отправилось");
  } catch (error) {
    res.send(error);
  }
};
