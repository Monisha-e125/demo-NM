const Router = require("express").Router();
const trainings = require("../data/trainings.json");

Router.get("/", (req, res) => {
  res.json(trainings);
});

module.exports = Router;
