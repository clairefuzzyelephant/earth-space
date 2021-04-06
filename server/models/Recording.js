const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema({
  fileLink: String,
  creationDate: Date
});
// compile model from schema
module.exports = mongoose.model("recording", RecordingSchema);