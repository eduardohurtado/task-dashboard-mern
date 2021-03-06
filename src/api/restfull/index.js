const express = require("express");
const morgan = require("morgan");
const path = require("path");

//Database Conection
require("./database/database");

//Server
const app = express();

//Server Settings
app.set("port", process.env.PORT || 8080);

//Server Middlewares
app.use(morgan("dev")); //"dev" Is the bash window text format.
app.use(express.json()); //To understand Json format.

//Server API Routes
app.use("/api/tasks", require("./database/routes/task.routes"));

//Server Static Files
app.use("/", express.static(path.join(__dirname, "../../../build")));

//Server Start
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
