// подключение express
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();

import bodyParser from "body-parser";
// создаем объект приложения
const app = express();
// настройка CORS
app.use(cors());
// настройка body-parser
app.use(bodyParser.json());

import userRoutes from "./routes/userRoutes.js";

app.use("/users", userRoutes);

// начинаем прослушивать подключения на 3003 порту
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Сервер запущен по порту ${PORT}...`);
});
