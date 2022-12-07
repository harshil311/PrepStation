const express = require("express");
const { read } = require("fs");
const jwt = require("jsonwebtoken");

const app = express();
const mongoose = require("mongoose");

//Models
const Student = require("./models/Student");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,X-Auth-Token, Content-Type, Accept",
    "Authorization"
  );
  next();
});

// import APIs
const results = require("./api/resultsAPI");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const questions = require("./api/questionsAPI");
const tests = require("./api/testAPI");

// Rest APIs
app.use("/questions", questions);
app.use("/results", results);
app.use("/tests", tests);

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Prepstation",
  });
});

app.post("/test", verifyToken, (req, res) => {
  jwt.verify(req.token, "prepstation", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Succesfully entered the Test", authData });
    }
  });
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(name, password);
  var query = {};
  query[name] = name;
  Student.findOne({ name: name }, (err, data) => {
    if (!data) res.json({ message: "User not found" });
    else {
      if (password == data.password) {
        console.log("authdata", data);
        jwt.sign({ data: data }, "prepstation", (err, token) => {
          res.json({ token: token });
        });
      } else {
        res.json({ message: "Incorrect Password" });
      }
    }
  });
});

function verifyToken(req, res, next) {
  //Get Auth Header Value
  const bearerHeader = req.headers["authorization"];
  //check if not undefined
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    //Set the token
    req.token = bearerToken;
    //Next middleware
    next();
  } else {
    //Forbidden
    res.json({ message: "Invalid credentials" });
  }
}

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.mgkh4.mongodb.net/Prepstation?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(5000, () => console.log("Server started on 5000"));
  });
