const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is a required value"],
    trim: true,
    maxLength: [20, "name cannot be more than 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = mongoose.model("tasks", taskSchema);

module.exports = task;
