const mongoose = require("mongoose");

const RegionCountSchema = new mongoose.Schema({
  regionName: String,
  count: Number,
});

// compile model from schema
module.exports = mongoose.model("regionCount", RegionCountSchema);