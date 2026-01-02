const Router = require("express").Router();

Router.post("/", (req, res) => {
  res.json({
    message: "Support request submitted successfully"
  });
});

module.exports = Router;
