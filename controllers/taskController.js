import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  const { title } = req.body;

  const task = new Task({ title });
  const createdTask = await task.save();

  res.send(createdTask);
};

export const editTask = async (req, res) => {
  const { title, priority, important, status, id } = req.body;

  try {
    if (!id) throw new Error("нет айди");

    const editedTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        priority,
        important,
        status,
      },
      { new: true }
    );

    res.send(editedTask);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.body;
  const task = await Task.findById(id);

  res.send(task);
};

export const deleteTask = async (req, res) => {
  const { id } = req.body;
  const task = await Task.findByIdAndDelete(id);

  res.send(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({});

  res.send(tasks);
};
