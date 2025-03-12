import mongoose from "mongoose";

// Подключение к MongoDB

const useMongoDb = async () => {
  mongoose
    .connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB and database "todo" is ready');
    })
    .catch((err) => {
      console.error("Connection errror", err);
    });
};

export default useMongoDb;
