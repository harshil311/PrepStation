const express = require("express");
const router = express.Router();

//Model
const Test = require("../models/Test");

router.post("/create", (req, res) => {
  console.log("creating...");
  const no = req.body.no;
  const marks = req.body.marks;
  const negativeMarks = req.body.negativeMarks;
  const subject = req.body.subject;
  const name = req.body.name;

  const newT = new Test({
    no: no,
    marks: marks,
    negativeMarks: negativeMarks,
    subject: subject,
    name: name,
  });

  newT
    .save()
    .then((test) => res.json({ message: "Test created successfully", test }));
});
module.exports = router;
