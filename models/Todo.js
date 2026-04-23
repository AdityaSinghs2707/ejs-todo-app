const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userId: String,
  text: String
});

module.exports = mongoose.model("Todo", todoSchema);