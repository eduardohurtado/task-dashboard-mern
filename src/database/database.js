const MongoClient = require("mongodb").MongoClient;

const URI =
  "mongodb+srv://user:task.2020@cluster0.l8lhe.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(URI, { useNewUrlParser: true });

client
  .connect()
  .then((db) => console.log("Database is connected."+db))
  .catch((err) => console.log(err));

module.exports = client;
