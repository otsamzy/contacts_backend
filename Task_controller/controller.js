const Task = require("../models/taskModels");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const id = req.params.id;
    const tasks = await Task.findById(id);
    if (!tasks) {
      return res.status(404).json({ msg: `no movie with the id ${id}` });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(200).json({ tasks });
};
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const tasks = await Task.findByIdAndDelete(taskId);
    if (!tasks) {
      return res
        .status(404)
        .json({ msg: `task with the id ${taskId} does not exist` });
    }
    res.status(204).json({ tasks: null });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const tasks = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tasks) {
      return res.status(404).json({ msg: `No task with the id ${taskId}` });
    }

    res.status(201).json({ tasks });
  } catch (error) {
    res.status(404).status({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  deleteTask,
  updateTask,
};
