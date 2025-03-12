import mongoose from "mongoose";

// Определяем схему для задачи
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    required: false,
  },
});

// Создаем модель на основе схемы
const Task = mongoose.model("Task", taskSchema);

export default Task;
