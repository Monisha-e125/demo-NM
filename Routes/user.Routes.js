const router = require("express").Router();
const users = require("../data/users.json");

router.get("/", (req, res) => {
  res.json(users[0]);
});

module.exports = router;

