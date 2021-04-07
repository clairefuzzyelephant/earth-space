const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  legalName: String,
  englishName: String,
  emailAddr: String,
  country: String,
  message: String,
  language: String,
  recordingLink: String,
  creationDate: { type: Date, default: Date.now }
});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);
