const express = require("express");
const router = express.Router();
const taskSchema = require("../models/taskSchema");

//Pull all tasks from server
router.get("/", async (req, res) => {
  const tasksDB = await taskSchema.find();
  console.log("Tasks storaged in DataBase:");
  console.log(tasksDB);
  res.json(tasksDB);
});

//Pull single task from server
router.get("/:id", async (req, res) => {
  const singleTask = await taskSchema.findById(req.params.id);
  res.json(singleTask);
});

//Upload new task to server
router.post("/", async (req, res) => {
  const { title, description, done } = req.body;
  const newTask = new taskSchema({ title, description, done });
  console.log(newTask);
  await newTask.save();
  res.json("POST: Recieved.");
});

//Update task in server
router.put("/:id", async (req, res) => {
  const { title, description, done } = req.body;
  const updateTask = { title, description, done };
  console.log("Updating task ID: " + req.params.id);
  await taskSchema.findByIdAndUpdate(req.params.id, updateTask);
  res.json("PUT: Recieved.");
});

//Delete task on server
router.delete("/:id", async (req, res) => {
  console.log("Deleting task ID: " + req.params.id);
  await taskSchema.findByIdAndRemove(req.params.id);
  res.json("DELETE: Recieved.");
});

module.exports = router;
