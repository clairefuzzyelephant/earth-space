const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  legalName: String,
  englishName: String,
  country: String,
  message: String
});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);
