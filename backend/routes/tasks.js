const express = require("express");
const router = express.Router();
const taskModel = require("../model/taskModel");

//Write a comment describing the purpose of this route
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// Write a comment describing the purpose of this route
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
