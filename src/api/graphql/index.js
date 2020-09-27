import express from "express";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import schema from "./database/schema/schema";

//Database Conection
import connect from "./database/database";
connect;

//Server
const app = express();

//Squema

//Server Settings
app.set("port", process.env.PORT || 8080);

//Server Middlewares
app.use(morgan("dev")); //"dev" Is the bash window text format.
app.use(express.json()); //To understand Json format.
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      messageID: "Test.",
    },
  })
);

//Server API Routes

//Server Static Files

//Server Start
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
