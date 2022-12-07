import React from "react";
import './AnswerSheet.css'
const AnswerSheet = () => {
  return <div>
      <div class="AnswerIntro">
        <h4>Exam Name:          JEE MAIN</h4>
        <h4>Subject Name:    Paper 1</h4>
      </div>

    <div class="AnswerSheetComponant2">


      <div class="col1">
        <div class="leftside">
          <div class="Ques">
            <p id="Questions">Questions</p>
          </div>
        </div>
      </div>

      <div class="col1">
        <div class="rightside">
          <div class="SelAns">
            <p id="SelectedAnswer">Selected Answer</p>
          </div>
        </div>
      </div>

    </div>

    <input type="button" class="buttonx" value="Submit"></input>
  </div>;
};

export default AnswerSheet;