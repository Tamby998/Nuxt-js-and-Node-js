let mongoose = require("mongoose");
let fileSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  file: {
    type: Object,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
let File = mongoose.model("fileModel", fileSchema);
module.exports = File;