const mongoose = require("mongoose");

const ResponseSchema = mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  testID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  responses: [
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

module.exports = mongoose.model("Response", ResponseSchema);
