const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  legalName: String,
  englishName: String,
  emailAddr: String,
  country: String,
  missEarth: String,
  message: String,
  translation: String,
  language: String,
  recordingLink: String,
  creationDate: { type: Date, default: Date.now }
});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);
