const mongoose = require("mongoose");

const MarksheetSchema = mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  testID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  result: [
    {
      qn: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      ans: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Marksheet", MarksheetSchema);
