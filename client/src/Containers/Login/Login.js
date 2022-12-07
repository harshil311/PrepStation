import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const history = useHistory();
  const loginHandler = () => {
    //  e.preventDefault();
    const header = `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxNmI5ODIyY2Y4NjYzMWNiYjAyNWU3MCIsIm5hbWUiOiJTYWhlZWwiLCJwYXNzd29yZCI6InNhaGVlbCJ9LCJpYXQiOjE2MzU0MDAyOTF9.AH28lSC6j2sWCN_laAhoXPJkC8BbzSHpmSYZgdCiiZA`;

    axios({
      method: "post",
      url: "/login",
      data: {
        name: userName,
        password: password,
      },
      headers: { header },
    }).then(async (response) => {
      console.log("response: ", response);
      if (role == "Teacher") {
        history.push("/TeacherDashboard");
      } else if (role == "Student") {
        history.push("/StudentDashboard");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="wrapper">
        <div class="title-text">
          <div class="title login">Login Form</div>
          <div class="title signup">Signup Form</div>
        </div>
        <div class="form-container">
          {/* <div class="slide-controls">
        <input type="radio" name="slide" id="login" checked/>
        <input type="radio" name="slide" id="signup"/>
        <label for="login" class="slide login">Login</label>
        <label for="signup" class="slide signup">Signup</label>
        <div class="slider-tab"></div>
     </div> */}
          <div class="form-inner">
            <form action="#" class="login">
              <div class="field">
                <input
                  type="text"
                  placeholder="user name or Email"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div class="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div class="field">
                <label> Select Role:&nbsp; &nbsp;</label>
                <select
                  onClick={(e) => {
                    setRole(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="Select"> Select</option>
                  <option value="Teacher"> Teacher</option>
                  <option value="Student"> Student</option>
                </select>
              </div>
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              {/* <div class="field btn"> */}
              {/* <div class="btn-layer"></div> */}
              <button
                // type="submit"
                class="btn"
                value="Login"
                onClick={() => {
                  loginHandler();
                }}
              >
                Login
              </button>
              {/* </div> */}
              <div class="signup-link">
                Not a member? <a href="/SignUp">Signup now</a>
              </div>
            </form>
            {/* <form action="#" class="signup">
           <div class="field">
              <input type="text" placeholder="Email Address" required/>
           </div>
           <div class="field">
              <input type="password" placeholder="Password" required/>
           </div>
           <div class="field">
              <input type="password" placeholder="Confirm password" required/>
           </div>
           <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup"/>
           </div>
        </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
