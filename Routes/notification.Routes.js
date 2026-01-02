const Router = require("express").Router();
const notifications = require("../data/notifications.json");

Router.get("/", (req, res) => {
  res.json(notifications);
});

module.exports = Router;
