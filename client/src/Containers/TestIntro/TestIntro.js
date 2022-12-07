import React from "react";
import './TestIntro.css'
const TestIntro = () => {
  return <div>

    <div class="content">
      <div class="row">
        <div class="column1">
          <div class="Heading">
            <h2 clas="h2heading">Welcome to</h2>
             <h1>Mock Test</h1>
              
             <p clas="TestDuration">
              <h5>Test Duration</h5>
              <h3>5 min</h3>
              <h5>No. of question</h5>
              <h3>180</h3>
            </p>
          
          </div>
         
        </div>

        <div class="column2" style={{ backgroundColor: "#aaa" }}>
          <p class="Para">Platform Instructions</p>
          <button class="Continue">Continue</button>
        </div>
      </div>
    </div>
    <div class="waves"></div>
  </div>;
};

export default TestIntro;