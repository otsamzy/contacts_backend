const express = require("express");
const {
  createTask,
  deleteTask,
  updateTask,
  getSingleTask,
  getAllTasks,
} = require("../Task_controller/controller");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask);

module.exports = router;
