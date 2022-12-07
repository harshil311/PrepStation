import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './TestResult.css'
const TestResult = () => {
  return (
      <section class="resultdisplay">
    <div class="col-md-12 exam-result" style={{display:"block"}}>
    <div class="panel panel-default panel-border-color panel-border-color-primary border-login">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="panel-body table-responsive">
                <table class="table table-bordered" id="tbl">
                    <thead>
                        <tr>
                            <th colspan="3">
                                <h5 class="col-md-6" style={{color:"red"}}>Please provide your valuable  feedback about Mock Test:</h5> <a href="https://forms.gle/EuK7R69Z2KJKafbN7" target="_blank" class="btn btn-danger pull-right col-md-3">Student FeedBack</a>
                            </th>
                            
                        </tr>
                        <tr>
                            <th colspan="4">Score Card</th>
                        </tr>
                    </thead>
                    <tbody>
                        
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
                        <tr class="align_centre">
                                        <td class="lblTotalQuestion">90</td>
                                        <td class="lblTotalSaved">0</td>
                                        <td class="lblNotAttempted">1</td>
                                        <td class="lblNotAttempted">1</td>
                                        {/* <td class="lblTotalMarkForReview">0</td>
                                        <td class="lblTotalSaveMarkForReview">0</td>
                                        <td class="lblNotVisited">89</td> */}
                                    </tr>
                    </thead>
                    <tbody id="tbodyResult"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</section>);
};

export default TestResult;