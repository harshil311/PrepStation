// import React, { Component } from "react";

// import Axios from "axios";

const express = require("express");
const router = express.Router();

//Model
const Question = require("../models/Question");

router.post("/create", (req, res) => {
  console.log("creating...qn");
  const question = req.body.question;
  const op1 = req.body.op1;
  const op2 = req.body.op2;
  const op3 = req.body.op3;
  const op4 = req.body.op4;
  const testID = req.body.testID;
  const correctOption = req.body.correctOption;
  const newQ = new Question({
    testID: testID,
    question: question,
    op1: op1,
    op2: op2,
    op3: op3,
    op4: op4,
    correctOption: correctOption,
  });

  newQ
    .save()
    .then((ques) =>
      res.json({ message: "question created successfully", ques })
    );
});

router.post("/getQuestions", (req, res) => {
  const testID = req.body.testID;

  Question.find({ testID: testID }, (err, doc) => {
    if (err) console.log(err);
    console.log(doc);
    res.json(doc);
  });
});

module.exports = router;
