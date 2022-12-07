import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./TestCreate.css";

export const TestCreate = () => {
  const [Question, setQuestion] = useState();
  const [optionA, setoptionA] = useState();
  const [optionB, setoptionB] = useState();
  const [optionC, setoptionC] = useState();
  const [optionD, setoptionD] = useState();
  const [Answer, setAnswer] = useState();

  // useEffect(() => {
  //   async function getData() {
  //     const res = await axios.get(`localhost:5000/questions/getQuestions`);
  //     console.log(res);
  //   }

  //   getData();
  // });
  const history = useHistory();
  const TestHandler = () => {
    //  e.preventDefault();
    const testID = "618be304b30d7e022888505b";
    axios({
      method: "post",
      url: "/questions/create",
      data: {
        testID: testID,
        question: Question,
        op1: optionA,
        op2: optionB,
        op3: optionC,
        op4: optionD,
        correctOption: Answer,
      },
      //headers: { header },
    }).then(async (response) => {
      console.log("response: ", response);
    });
  };

  // const TestDisplay = () => {
  //   //  e.preventDefault();
  //   const testID = "618be304b30d7e022888505b";
  //   axios({
  //     method: "get",
  //     url: "/questions/getQuestions",
  //     data: {
  //       testID: testID,
  //       question: Question,
  //       op1: optionA,
  //       op2: optionB,
  //       op3: optionC,
  //       op4: optionD,
  //       correctOption: Answer,
  //     },
  //     //headers: { header },
  //   }).then(async (response) => {
  //     console.log("response: ", response);
  //   });
  // };

  return (
    <section>
      <div class="quiz_box">
        <header>
          <div class="title">Test Creating</div>
        </header>

        <section>
          <form method="post" id="quiz">
            <li class="Qlist">
              {/* <h3>CSS Stands for...</h3> */}
              <div class="que_text">
                {/* <span>Q1. What does CSS stand for?</span> */}

                <label for="question-1-answers-A">
                  <input
                    type="text"
                    name="question-1-answers"
                    placeholder="    Add Question here"
                    id="question-1"
                    onChange={(e) => {
                      setQuestion(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div class="opt_list">
                <div class="option">
                  1.{" "}
                  <label for="question-1-answers-A">
                    <input
                      type="text"
                      name="question-1-answers"
                      id="question-1-answers-A"
                      onChange={(e) => {
                        setoptionA(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div class="option">
                  2.{" "}
                  <label for="question-1-answers-B">
                    <input
                      type="text"
                      name="question-1-answers"
                      id="question-1-answers-B"
                      onChange={(e) => {
                        setoptionB(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div class="option">
                  3.{" "}
                  <label for="question-1-answers-C">
                    <input
                      type="text"
                      name="question-1-answers"
                      id="question-1-answers-C"
                      onChange={(e) => {
                        setoptionC(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div class="option">
                  4.{" "}
                  <label for="question-1-answers-D">
                    <input
                      type="text"
                      name="question-1-answers"
                      id="question-1-answers-D"
                      onChange={(e) => {
                        setoptionD(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div class="option">
                  <label for="question-1-answers-D">
                    correct option :{" "}
                    <input
                      type="text"
                      name="question-1-answers"
                      id="question-1-answers-D"
                      onChange={(e) => {
                        setAnswer(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </label>
                </div>
              </div>
            </li>
          </form>
        </section>

        {/* Quiz box footer */}
        <footer>
          <button
            class="next_btn"
            onClick={() => {
              TestHandler();
            }}
          >
            Save
          </button>
        </footer>
      </div>
      <br></br>
      <a href="/testcreate">
        <button
          class="next_btn1"
          // onClick={() => {
          //   TestDisplay();
          // }}
        >
          Add new
        </button>
      </a>
    </section>
  );
};

export default TestCreate;
