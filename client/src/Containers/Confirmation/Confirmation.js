import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useHistory } from "react-router-dom";
import './Confirmation.css'
const TestConfirmation = () => {
    const history = useHistory();
  const testconfirmHandler = () => {
    history.push("/testresult"); 
  };
  return (
      <section  style={{paddingBottom: '390px'}}>
    
                <div class="col-md-12 exam-thankyou">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="col-md-12 text-center">
                                <h4> Thank you, Submitted Successfully.</h4>
                                {/* <a href="testresult"class="btn btn-default btn-lg" id="btnViewResult">View Result</a> */}
                                <button class="btn btn-default btn-lg" id="btnViewResult" onClick={() => {
                                      testconfirmHandler();
                                    }}>
                                    View Result
                                  </button>
                            </div>
                        </div>
                    </div>
                </div>
                
</section>
    );
};

export default TestConfirmation;