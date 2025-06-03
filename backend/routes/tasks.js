const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel");
// the "models" was missing its s. Without the s, the code wouldn't function.
//Write a comment describing the purpose of this route
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// Write a comment describing the purpose of this route
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { name, description } = req.body;
  const task = await taskModel.addTask(name, description);
//  const { name, description } addTask needs to match.
  res.status(201).json(task);
});

module.exports = router;
