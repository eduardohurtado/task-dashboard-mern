const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  id: {type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, required: true },
});

module.exports = mongoose.model("taskSchema", taskSchema);
