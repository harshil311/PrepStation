import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./TestInterface.css";
const TestInterface = () => {
  const history = useHistory();
  const [name, setName] = useState();
  const [test, setTest] = useState();
  const [questionPaper, setQuestionPaper] = useState();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("loading");
  const [currentQuestion, setCurrentQuestion] = useState();
  const [quesNo, setQuesNo] = useState(1);
  const [sheet, setSheet] = useState();
  useEffect(() => {
    const testID = `618be304b30d7e022888505b`;
    axios({
      method: "post",
      url: "/questions/getQuestions",
      data: {
        testID: testID,
      },
    }).then(async (response) => {
      console.log("response: ", response);
      setQuestionPaper(response.data);
      if (response.data.length > 0) setCurrentQuestion(response.data[0]);
      setLoading(false);
      setStatus("test");
    });
  }, []);

  const next = () => {
    if (questionPaper.length > quesNo) {
      setQuesNo(quesNo + 1);
      setCurrentQuestion(questionPaper[quesNo - 1]);
      console.log("current  ", quesNo, currentQuestion);
    }
  };
  const back = () => {
    if (1 < quesNo) {
      setQuesNo(quesNo - 1);
      setCurrentQuestion(questionPaper[quesNo - 1]);
      console.log("current  ", quesNo, currentQuestion);
    }
  };

  const onSubmit = () => {
    setSheet({
      testID: "618be304b30d7e022888505b",
      studentID: "616b9822cf86631cbb025e70",
      qn1: "618be429803532929888b349",
      qn2: "618be5105a55c5078fc3a77d",
      ans1: "op4",
      ans2: "op2",
    });
    axios({
      method: "post",
      url: "/results/submit",
      data: {
        ...sheet,
      },
      //headers: { header },
    }).then(async (response) => {
      console.log("response: ", response);
      history.push("/testresult");
    });
  };
  // useEffect(() => {
  // }, [quesNo]);

  let examSummary = (
    <>
      <section style={{ paddingBottom: "200px" }}>
        <div class="row">
          <div class="exsummary col-md-12 exam-summery">
            <div class="panel panel-body panel-default">
              <div class="table-responsive">
                <h3 class="text-center">Exam Summary</h3>
                {/* <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>No of Questions</th>
                      <th>Question</th>
                      <th>Your Answer</th>
                      <th>Marked for Review</th>
                                        <th>Answered &amp; Marked for Review (will be considered for evaluation)</th>
                                        <th>Not Visited</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="align_centre">
                      <td class="lblTotalQuestion">90</td>
                      <td class="lblTotalSaved">0</td>
                      <td class="lblNotAttempted">1</td>
                      <td class="lblTotalMarkForReview">0</td>
                                        <td class="lblTotalSaveMarkForReview">0</td>
                                        <td class="lblNotVisited">89</td>
                    </tr>
                  </tbody>
                </table> */}
                <hr />
                <div class="col-md-12 text-center ">
                  <h4>
                    {" "}
                    Are you sure you want to submit for final marking?
                    <br />
                    No changes will be allowed after submission. <br />{" "}
                  </h4>
                  <a
                    // href="/TestConfirmation"
                    class="btn btn-default btn-lg"
                    id="btnYesSubmitConfirm"
                    onClick={() => onSubmit()}
                  >
                    Yes
                  </a>{" "}
                  <a
                    // href="/testinterface"
                    class="btn btn-default btn-lg"
                    id="btnNoSubmitConfirm"
                    onClick={() => setStatus("test")}
                  >
                    No
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-md-12 exam-thankyou" style={{display:"none"}}>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="col-md-12 text-center">
                                <h4> Thank you, Submitted Successfully.</h4>
                                <a class="btn btn-default btn-lg" id="btnViewResult">View Result</a>
                            </div>
                        </div>
                    </div>
                </div> */}
          {/* <div class="col-md-12 exam-result" style={{display:"block"}}>
                    <div class="panel panel-default panel-border-color panel-border-color-primary border-login">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="panel-body table-responsive">
                                <table class="table table-bordered" id="tbl">
                                    <thead>
                                        <tr>
                                            <th colspan="3">
                                                <h5 class="col-md-6" style={{color:"red"}}>Please provide your valuable  feedback about Mock Test:</h5> <a href="/feedback" target="_blank" class="btn btn-danger pull-right col-md-3">Student FeedBack</a>
                                            </th>
                                            <th>
                                                <a href="/Quiz" class="btn btn-info pull-right">Back</a>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="4">Scrore Card</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Total Question</td>
                                            <th id="lblRTotalQuestion"></th>
                                            <td>Total Attempted</td>
                                            <th id="lblRTotalAttempted"></th>
                                        </tr>
                                        <tr>
                                            <td>Correct Answers</td>
                                            <th id="lblRTotalCorrect"></th>
                                            <td>Incorrect Answers</td>
                                            <th id="lblRTotalWrong"></th>
                                        </tr>
                                        <tr>
                                            <td>Score</td>
                                            <td id="lblRScore"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table id="theadres" class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Question No.</th>
                                            <th>selected Option</th>
                                            <th>Status</th>
                                            <th>Correct Option</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyResult"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </section>
    </>
  );

  return (
    <>
      {status == "loading" ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : status == "test" ? (
        <>
          <section>
            <div id="heading-breadcrumbs">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-sm-12 table-responsive ">
                    <div class="navbar-collapse">
                      <ul class="nav navbar-nav pull-left">
                        <li class="user-profile">
                          <div class="table-responsive">
                            <table>
                              <tbody>
                                <tr>
                                  <td class="tdata">
                                    <i class="fa fa-user fa-4x"></i>
                                  </td>
                                  <td>
                                    <table>
                                      <tbody class="tablebody">
                                        <tr>
                                          <td>Candidate Name</td>
                                          <td>
                                            {" "}
                                            : <span>[Your Name]</span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Exam Name</td>
                                          <td>
                                            {" "}
                                            : <span>JEE-Main</span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Subject Name</td>
                                          <td>
                                            {" "}
                                            :{" "}
                                            <span>
                                              PAPER 1 EHG 11th Jan SHIFT 2
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Remaining Time</td>
                                          <td>
                                            :{" "}
                                            <span class="timer-title time-started">
                                              02:59:32
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-md-3 col-sm-12 pull-right"
                    id="divdrplngcng"
                    style={{ margin: "15px 0 0 0" }}
                  >
                    <select
                      id="drpLanguage"
                      class="form-control drpLanguage"
                      data-role="none"
                      name="drplanguage"
                    >
                      <option value="1">English</option>
                      <option value="2">Hindi</option>
                      <option value="3">Gujarati</option>
                    </select>
                    <input type="hidden" id="hdfCurrentLng" value="1" />
                  </div>
                </div>
              </div>
            </div>
            <div id="content">
              <div class="container">
                <div class="row exam-paper">
                  <div
                    class="Qpannel col-md-6"
                    id="quest"
                    style={{ padding: "0" }}
                  >
                    <div class="tble table-responsive">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div class="panel panel-default">
                                <div class="panel-body mb0">
                                  <div
                                    class="tab-content div-question mb0"
                                    id="page01"
                                  >
                                    <input
                                      type="hidden"
                                      class="hdfQuestionID"
                                    />
                                    <input
                                      type="hidden"
                                      class="hdfPaperSetID"
                                    />
                                    <input
                                      type="hidden"
                                      value="1"
                                      class="hdfCurrectAns"
                                    />
                                    <input
                                      type="hidden"
                                      value="3"
                                      class="hdfCorrectAnsMarks"
                                    />
                                    <input
                                      type="hidden"
                                      value="-1"
                                      class="hdfInCorrectAnsMarks"
                                    />
                                    <div class="question-height">
                                      <h4 class="question-title">
                                        {" "}
                                        Question {quesNo}:{" "}
                                        <h2>{currentQuestion.question}</h2>{" "}
                                      </h4>

                                      <br />
                                      <table class="table table-borderless mb0">
                                        <tbody>
                                          <tr>
                                            <td>
                                              {" "}
                                              <input
                                                type="radio"
                                                value="1"
                                                name="radiospage01"
                                                id="rOption01_1"
                                              />{" "}
                                              1 ){currentQuestion.op1}{" "}
                                            </td>
                                            <td>
                                              {" "}
                                              <input
                                                type="radio"
                                                value="2"
                                                name="radiospage01"
                                                id="rOption01_1"
                                              />{" "}
                                              2 ){currentQuestion.op2}{" "}
                                            </td>
                                            <td>
                                              {" "}
                                              <input
                                                type="radio"
                                                value="3"
                                                name="radiospage01"
                                                id="rOption01_1"
                                              />{" "}
                                              3 ){currentQuestion.op3}{" "}
                                            </td>
                                            <td>
                                              {" "}
                                              <input
                                                type="radio"
                                                value="4"
                                                name="radiospage01"
                                                id="rOption01_1"
                                              />{" "}
                                              4 ){currentQuestion.op4}{" "}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <h4 class="question-footer">
                                        {" "}
                                        <img
                                          src="https://nta.ac.in/img/QuizIcons/up.png"
                                          class="btnup pull-right"
                                        />{" "}
                                      </h4>
                                    </div>
                                  </div>

                                  <div class="rightpanel col-md-12 col-xs-12 col-sm-12">
                                    <button class="mb5 full-width btn btn-success btn-save-answer">
                                      Save &amp; Next
                                    </button>
                                    <button class="mb5 full-width btn btn-default btn-reset-answer">
                                      Clear
                                    </button>
                                    <button class="mb5 full-width btn btn-warning btn-save-mark-answer">
                                      Save &amp; Mark For Review
                                    </button>
                                    <button class="mb5 full-width btn btn-primary btn-mark-answer">
                                      Mark For Review &amp; Next
                                    </button>
                                  </div>
                                </div>
                                <div class="panel-footer">
                                  <div class="row">
                                    <div class="col-md-12">
                                      {" "}
                                      <a>
                                        <button
                                          class="btn btn-success btn-submit-all-answers pull-right"
                                          onClick={() => setStatus("submit")}
                                        >
                                          Submit
                                        </button>
                                      </a>
                                      &nbsp;&nbsp;{" "}
                                      <a
                                        href="javascript:void(0);"
                                        class="btn btn-default pull-left"
                                        id="btnPrevQue"
                                        disabled="disabled"
                                        onClick={() => back()}
                                      >
                                        {" "}
                                        &lt;&lt; Back{" "}
                                      </a>
                                      &nbsp;&nbsp;{" "}
                                      <a
                                        href="javascript:void(0);"
                                        class="btn btn-default pull-left"
                                        id="btnNextQue"
                                        onClick={() => next()}
                                      >
                                        Next &gt;&gt;
                                      </a>
                                      &nbsp;&nbsp;{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="maindata full_screen pull-right">
                                <i class="fa fa-angle-right fa-2x"></i>
                              </div>
                              <div class="maindata collapse_screen hidden pull-right">
                                <i class="fa fa-angle-left fa-2x"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-4" id="pallette">
                    <div class="exsummary2 panel panel-body panel-default mb0 mt10">
                      <div class="table-responsive">
                        <table class=" table table-borderless mb0">
                          <thead>
                            <tr>
                              <td class="full-width">
                                {" "}
                                <a class="test-ques-stats que-not-attempted lblNotVisited">
                                  89
                                </a>
                              </td>
                              <td>Not Visited</td>
                              <td class="full-width">
                                {" "}
                                <a class="test-ques-stats que-not-answered lblNotAttempted">
                                  1
                                </a>{" "}
                              </td>
                              <td>Not Answered</td>
                            </tr>
                            <tr>
                              <td class="full-width">
                                {" "}
                                <a class="test-ques-stats que-save lblTotalSaved">
                                  0
                                </a>{" "}
                              </td>
                              <td>Answered</td>
                              <td class="full-width">
                                {" "}
                                <a class="test-ques-stats que-mark lblTotalMarkForReview">
                                  0
                                </a>{" "}
                              </td>
                              <td>Marked for Review</td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <a class="test-ques-stats que-save-mark lblTotalSaveMarkForReview">
                                  0
                                </a>{" "}
                              </td>
                              <td colspan="3">
                                Answered &amp; Marked for Review (will be
                                considered for evaluation)
                              </td>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    <div class="panel panel-default ">
                      <div class="scrolldown panel-body ">
                        <ul class="pagination test-questions">
                          <li class="active" data-seq="1">
                            <a
                              class="test-ques que-not-answered "
                              href="javascript:void(0);"
                              data-href="page01"
                            >
                              01
                            </a>
                          </li>
                          <li class="" data-seq="1">
                            <a
                              class="test-ques que-not-attempted "
                              href="javascript:void(0);"
                              data-href="page02"
                            >
                              02
                            </a>
                          </li>
                          <li class="" data-seq="1">
                            <a
                              class="test-ques que-not-attempted "
                              href="javascript:void(0);"
                              data-href="page03"
                            >
                              03
                            </a>
                          </li>
                          <li class="" data-seq="1">
                            <a
                              class="test-ques que-not-attempted "
                              href="javascript:void(0);"
                              data-href="page04"
                            >
                              04
                            </a>
                          </li>
                          <li class="" data-seq="1">
                            <a
                              class="test-ques que-not-attempted "
                              href="javascript:void(0);"
                              data-href="page05"
                            >
                              05
                            </a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="row">
                <div class="exsummary col-md-12 exam-summery">
                    <div class="panel panel-body panel-default">
                        <div class="table-responsive">
                            <h3 class="text-center">Exam Summary</h3>
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No of Questions</th>
                                        <th>Answered</th>
                                        <th>Not Answered</th>
                                        <th>Marked for Review</th>
                                        <th>Answered &amp; Marked for Review (will be considered for evaluation)</th>
                                        <th>Not Visited</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align_centre">
                                        <td class="lblTotalQuestion">90</td>
                                        <td class="lblTotalSaved">0</td>
                                        <td class="lblNotAttempted">1</td>
                                        <td class="lblTotalMarkForReview">0</td>
                                        <td class="lblTotalSaveMarkForReview">0</td>
                                        <td class="lblNotVisited">89</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div class="col-md-12 text-center">
                                <h4> Are you sure you want to submit for final marking?<br/>No changes will be allowed after submission. <br/> </h4>
                                <a class="btn btn-default btn-lg" id="btnYesSubmitConfirm">Yes</a> <a class="btn btn-default btn-lg" id="btnNoSubmitConfirm">No</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 exam-thankyou" style={{display:"none"}}>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="col-md-12 text-center">
                                <h4> Thank you, Submitted Successfully.</h4>
                                <a class="btn btn-default btn-lg" id="btnViewResult">View Result</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div class="col-md-12 exam-result" style={{display:"block"}}>
                    <div class="panel panel-default panel-border-color panel-border-color-primary border-login">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="panel-body table-responsive">
                                <table class="table table-bordered" id="tbl">
                                    <thead>
                                        <tr>
                                            <th colspan="3">
                                                <h5 class="col-md-6" style={{color:"red"}}>Please provide your valuable  feedback about Mock Test:</h5> <a href="/feedback" target="_blank" class="btn btn-danger pull-right col-md-3">Student FeedBack</a>
                                            </th>
                                            <th>
                                                <a href="/Quiz" class="btn btn-info pull-right">Back</a>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="4">Scrore Card</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Total Question</td>
                                            <th id="lblRTotalQuestion"></th>
                                            <td>Total Attempted</td>
                                            <th id="lblRTotalAttempted"></th>
                                        </tr>
                                        <tr>
                                            <td>Correct Answers</td>
                                            <th id="lblRTotalCorrect"></th>
                                            <td>Incorrect Answers</td>
                                            <th id="lblRTotalWrong"></th>
                                        </tr>
                                        <tr>
                                            <td>Score</td>
                                            <td id="lblRScore"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table id="theadres" class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Question No.</th>
                                            <th>selected Option</th>
                                            <th>Status</th>
                                            <th>Correct Option</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyResult"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* </div> */}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>{examSummary}</>
      )}
    </>
  );
};

export default TestInterface;
