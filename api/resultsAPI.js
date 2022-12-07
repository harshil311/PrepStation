const express = require("express");
const router = express.Router();

//Model
const Response = require("../models/Response");
const Marksheet = require("../models/Marksheet");
const Question = require("../models/Question");

router.post("/submit", (req, res) => {
  console.log("Responses....", req.body);
  const studentID = req.body.studentID;
  const testID = req.body.testID;
  const qn1 = req.body.qn1;
  const qn2 = req.body.qn2;
  const ans1 = req.body.ans1;
  const ans2 = req.body.ans2;

  const newR = new Response({
    studentID: studentID,
    testID: testID,
    responses: [
      {
        qn: qn1,
        ans: ans1,
      },
      {
        qn: qn2,
        ans: ans2,
      },
    ],
  });
  newR
    .save()
    .then((resp) =>
      res.json({ message: "Response submitted successfully", resp })
    );
});

router.get("/check", async (req, res) => {
  const studentID = req.body.studentID;
  const testID = req.body.testID;
  var result = {};
  result.studentID = studentID;
  result.testID = testID;
  result.questions = [];
  result.totalMarks = 0;
  let response = await Response.find(
    { studentID: studentID, testID: testID },
    (err, doc) => {
      if (err) console.log(err);
    }
  )
    .clone()
    .catch(function (err) {
      console.log(err);
    });
  // console.log("ressss", response[0]);
  //let i = 0; i < response[0].responses.length; i++
  for (let qn of response[0].responses) {
    // console.log("qnn", qn);
    let ques = await Question.find({ _id: qn.qn }, (err, doc) => {
      if (err) console.log(err);
    })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    console.log(qn.ans, ques[0].correctOption, "quess", ques[0]);
    if (qn.ans == ques[0].correctOption) {
      result.totalMarks += 4;
      console.log(result.totalMarks);
      console.log("truee");
    } else {
      result.totalMarks -= 1;
      console.log(result.totalMarks);
      console.log("falsee");
    }
    var selectedOption;
    switch (qn.ans) {
      case "op1":
        selectedOption = ques[0].op1;
        break;
      case "op2":
        selectedOption = ques[0].op2;
        break;
      case "op3":
        selectedOption = ques[0].op3;
        break;
      case "op4":
        selectedOption = ques[0].op4;
        break;
    }
    var corrOp;
    switch (ques[0].correctOption) {
      case "op1":
        corrOp = ques[0].op1;
        break;
      case "op2":
        corrOp = ques[0].op2;
        break;
      case "op3":
        corrOp = ques[0].op3;
        break;
      case "op4":
        corrOp = ques[0].op4;
        break;
    }

    var objj = {};
    objj["question"] = ques[0].question;
    objj["correctOption"] = corrOp;
    objj["yourOption"] = selectedOption;
    result.questions.push(objj);
  }

  res.json(result);
  console.log("Successfully calculated the results..", result);
});

module.exports = router;
