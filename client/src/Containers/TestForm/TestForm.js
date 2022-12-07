import React, { useState, useEffect }  from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import './TestForm.css'


export const TestForm = () => {
    const [Tno, setTno] = useState();
    const [Tmarks, setTmarks] = useState();
    const [TnegativeMarks, setTnegativeMarks] = useState();
    const [Tsubject, setTsubject] = useState();
    const [Tname, setTname] = useState();
    
    const history = useHistory();
    const TestformHandler = () => {
      //  e.preventDefault();
      const testID = `618be304b30d7e022888505b`;
      axios({
        method: "post",
        url: "/tests/create",
        data: {
            
            no: Tno,
            marks: Tmarks,
            negativeMarks: TnegativeMarks,
            subject: Tsubject,
            name: Tname,
            
        },
        //headers: { header },
      }).then(async (response) => {
        console.log("response: ", response);
        // if (role == "Teacher") {
        //   history.push("/TeacherDashboard");
        // } else if (role == "Student") {
        //   history.push("/StudentDashboard");
        // }
      });
    };

    return (
        <section>



            <div class="quiz_box">
                <header>
                    <div class="title">Please enter Test intsructions</div>
                </header>

                <section>
                    <form method="post" id="quiz">
                        <li class="Qlist">

                            {/* <h3>CSS Stands for...</h3> */}
                            {/* <div class="que_text">
                                <span>Q1. What does CSS stand for?</span>
                                
                                    <label for="question-1-answers-A">enter number of questions : <input type="text" name="question-1-answers" placeholder="" id="question-1" /></label>
                            </div> */}
                            <div class="opt_list">

                            <div class="option">
                                
                                
                                <label for="question-1-answers-A">Enter number of questions : <input type="text" name="question-1-answers" placeholder="" id="question-1" onChange={(e) => {
                    setTno(e.target.value);
                    console.log(e.target.value);
                  }}/></label>
                                </div>

                                <div class="option">
                                
                                <label for="question-1-answers-A">Enter marks for correct answer : <input type="text" name="question-1-answers" id="question-1-answers-A"  onChange={(e) => {
                    setTmarks(e.target.value);
                    console.log(e.target.value);
                  }}/></label>
                                </div>

                                <div class="option">
                                
                                <label for="question-1-answers-B">Enter marks to deduct for wrong answer :  <input type="text" name="question-1-answers" id="question-1-answers-B" onChange={(e) => {
                    setTnegativeMarks(e.target.value);
                    console.log(e.target.value);
                  }}/></label>
                                </div>

                                <div class="option">
                               
                               <label for="question-1-answers-C">Enter subject name : <input type="text" name="question-1-answers" id="question-1-answers-C" onChange={(e) => {
                    setTsubject(e.target.value);
                    console.log(e.target.value);
                  }}/></label>
                           </div>

                            <div class="option">
                                
                                <label for="question-1-answers-A">Enter name of test : <input type="text" name="question-1-answers" placeholder="" id="question-1" onChange={(e) => {
                    setTname(e.target.value);
                    console.log(e.target.value);
                  }}/></label>
                                </div>

                                
                           
                            

                               

                                {/* <div class="option">
                                
                                <label for="question-1-answers-D">Enter duration of examination : <input type="text" name="question-1-answers" id="question-1-answers-D"/></label>
                                </div> */}
                            </div>

                        </li>
                    </form>
                </section>



                {/* Quiz box footer */}
                <footer>
                    <button class="next_btn" onClick={() => {
                  TestformHandler();
                }}>Save</button>
                </footer>


            </div>
            <br></br>
            <a href="/testcreate"><button class="next_btn1">create</button></a>



        </section>


    );
}


export default TestForm;