import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const { name, description, status } = req.body;
  try {
    const newTaks = new Task({ name, description, status, user: req.user.id });
    const task = await newTaks.save();
    res.json({
      message: "Task created successfully",
      taskid: task._id,
      name: task.name,
      description: task.description,
      status: task.status,
      user: task.user,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};

export const allTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user");
  res.json(tasks);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }
  res.json({ message: "Task deleted successfully" });
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }
  res.json({ message: "Task updated successfully" });
};
