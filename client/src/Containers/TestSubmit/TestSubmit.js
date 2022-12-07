import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useHistory } from "react-router-dom";
import './TestSubmit.css'
const TestSubmit = () => {

    const history = useHistory();
  const testsubmitHandler = () => {
    history.push("/TestConfirmation"); 
  };
  const testrevertback=()=>{
    history.push("/testinterface"); 
  }

  return (
      <section  style={{paddingBottom: '200px'}}>
    
            <div class="row">
                <div class="exsummary col-md-12 exam-summery">
                    <div class="panel panel-body panel-default">
                        <div class="table-responsive" >
                            <h3 class="text-center">Exam Summary</h3>
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No of Questions</th>
                                        <th>Question</th>
                                        <th>Your Answer</th>
                                        {/* <th>Marked for Review</th>
                                        <th>Answered &amp; Marked for Review (will be considered for evaluation)</th>
                                        <th>Not Visited</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align_centre">
                                        <td class="lblTotalQuestion">90</td>
                                        <td class="lblTotalSaved">0</td>
                                        <td class="lblNotAttempted">1</td>
                                        {/* <td class="lblTotalMarkForReview">0</td>
                                        <td class="lblTotalSaveMarkForReview">0</td>
                                        <td class="lblNotVisited">89</td> */}
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div class="col-md-12 text-center " >
                                <h4> Are you sure you want to submit for final marking?<br/>No changes will be allowed after submission. <br/> </h4>
                                {/* <a href="/TestConfirmation" class="btn btn-default btn-lg" id="btnYesSubmitConfirm">Yes</a> <a href="/testinterface"class="btn btn-default btn-lg" id="btnNoSubmitConfirm">No</a> */}

                                <button class="btn btn-default btn-lg" id="btnYesSubmitConfirm" onClick={() => {
                                      testsubmitHandler();
                                    }}>
                                    Yes
                                  </button>
                                  <button class="btn btn-default btn-lg" id="btnNoSubmitConfirm" onClick={() => {
                                      testrevertback();
                                    }}>
                                    No
                                  </button>
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
    );
};

export default TestSubmit;