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

export const getEmail = (from, to) => {
  return `
  <div
      style="
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(45deg, #ff9a9e, #fad0c4);
        font-family: 'Arial', sans-serif;
        padding: 20px;
      "
    >
      <div
        style="
          position: relative;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          box-sizing: border-box;
        "
      >
        <div
          style="
            position: relative;
            z-index: 2;
            background: white;
            padding: 30px;
            border-radius: 15px;
          "
        >
          <h1
            style="
              font-family: 'Brush Script MT', cursive;
              font-size: 42px;
              color: #ff1493;
              text-align: center;
              margin-bottom: 20px;
              transform: rotate(-3deg);
            "
          >
            С 8 Марта!
          </h1>

          <div
            style="display: flex; justify-content: space-around; margin: 30px 0"
          >
            <div style="font-size: 40px">🌸</div>
            <div style="font-size: 40px">🌺</div>
            <div style="font-size: 40px">🌷</div>
          </div>

          <p
            style="
              font-size: 18px;
              line-height: 1.6;
              color: #555;
              margin-bottom: 25px;
              text-align: center;
            "
          >
            Дорогая, прекрасная, уникальная!<br />
            Пусть этот день наполнит твою жизнь<br />
            ароматом цветов, теплом солнечных лучей<br />
            и искренними улыбками! Ты заслуживаешь<br />
            всего самого прекрасного! С праздником!
          </p>

          <p
            style="
              text-align: right;
              font-style: italic;
              color: #ff69b4;
              font-size: 20px;
              margin-top: 20px;
            "
          >
            С любовью, ${to}
          </p>
        </div>
      </div>
    </div>
  `;
};
