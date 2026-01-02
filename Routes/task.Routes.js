const router = require("express").Router();
const fs = require("fs");

const file = "data/tasks.json";

router.get("/", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(file));
  res.json(tasks);
});

router.post("/", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(file));
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    status: "Pending",
    deadline: req.body.deadline
  };
  tasks.push(newTask);
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
  res.status(201).json(newTask);
});

module.exports = router;
