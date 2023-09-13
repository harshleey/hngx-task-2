const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("Person", PersonSchema);
