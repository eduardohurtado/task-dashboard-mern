const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/", async (req, res) => {
  // const tasks = await Task.find();
  // console.log(tasks);
  res.json("GET-API: Recieved.");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.json("POST: recieved.");
});

module.exports = router;

// console.log(tasks);
//     res.json({
//       Status: "API Working.",
//     });
