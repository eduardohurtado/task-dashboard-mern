const express = require("express");
const morgan = require("morgan");
const path = require("path");

//Database Conection
const { client } = require("./database/database");

//Server
const app = express();

//Server Settings
app.set("port", process.env.PORT || 8080);

//Server Middlewares
app.use(morgan("dev")); //dev Is the bash text format.
app.use(express.json());

//Server Routes
app.use("/api/tasks", require("./database/routes/task.routes"));

//Server Static Files
// console.log();
app.use(express.static(path.join(__dirname, "../build")));

//Server Start
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
