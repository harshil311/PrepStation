const mongoose = require("mongoose");

const TestSchema = mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  negativeMarks: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Test", TestSchema);
