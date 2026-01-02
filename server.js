const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


// Routes
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/tasks", require("./routes/task.routes"));
app.use("/api/trainings", require("./routes/training.routes"));
app.use("/api/notifications", require("./routes/notification.routes"));
app.use("/api/stats", require("./routes/stats.routes"));
app.use("/api/support", require("./Routes/support.Routes"));

module.exports = app;
