const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes/taskRoutes");
app.use("/tasks", routes);

app.listen(3000);
