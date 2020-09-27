import { connect } from "mongoose";

const URI =
  "mongodb+srv://dbUser:2020@cluster0.wqi6t.mongodb.net/tasksDB?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  // reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
};

export default connect(URI, options)
  .then(() => console.log(">>> MongoDB is conected."))
  .catch((err) => console.log(err));
