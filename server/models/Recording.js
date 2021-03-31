const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema({
  file: Buffer,
  creationDate: Date
});
// compile model from schema
module.exports = mongoose.model("recording", RecordingSchema);