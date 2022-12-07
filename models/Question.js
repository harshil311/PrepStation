const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  testID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  question: {
    type: String,
    require: true,
  },
  op1: {
    type: String,
    require: true,
  },
  op2: {
    type: String,
    require: true,
  },
  op3: {
    type: String,
    require: true,
  },
  op4: {
    type: String,
    require: true,
  },
  correctOption: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
