import mongoose from "mongoose";

// Определяем схему для задачи
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  priority: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  important: {
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

taskSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});

// Создаем модель на основе схемы
const Task = mongoose.model("Task", taskSchema);

export default Task;
