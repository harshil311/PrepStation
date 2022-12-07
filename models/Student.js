const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  emailid: {
    required: true,
    type: String,
    unique: true,
  },
  // contact: {
  //   required: true,
  //   type: String,
  //   unique: true,
  // },
  // parent: {
  //   required: true,
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: ParentSchema,
  // },
  // Stream: {},
  // avatar: {
  //   required: false,
  //   type: String,
  // },
  // type: {
  //   required: true,
  //   type: String,
  //   default: `TRAINER`,
  // },
  // status: {
  //   required: true,
  //   default: 1,
  //   type: Boolean,
  // },
});

module.exports = mongoose.model("Student", StudentSchema);
