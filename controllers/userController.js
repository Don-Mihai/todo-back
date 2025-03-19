import { transporter, getEmail } from "../utils.js";
import User from "../models/userModel.js";
import bcrypt, { compare } from "bcrypt";

export const register = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({ email, password: hashedPassword });
  const registeredUser = await user.save();

  res.send(registeredUser);
};

export const auth = async (req, res) => {
  const { email, password } = req.body;

  // password - admin

  const user = await User.findOne({ email });

  if (!user) {
    res.status(500).send("нет пользователя с таким email");
  }

  const isCorrect = await compare(password, user.password);

  if (!isCorrect) {
    res.status(500).send("пароль неверный");
  }

  res.send(user);
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
      html: getEmail(_, "chillside32@yandex.ru"),
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);
    res.send("сообщение отправилось");
  } catch (error) {
    res.send(error);
  }
};
