const Router = require("express").Router();
const stats = require("../data/stats.json");

Router.get("/", (req, res) => {
  res.json(stats);
});

module.exports = Router;
