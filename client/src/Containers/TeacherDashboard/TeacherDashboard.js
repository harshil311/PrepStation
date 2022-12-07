import React, { Fragment } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbars/Navbar";
import { useHistory } from "react-router-dom";
import "./td.css";

const TeacherDashboard = () => {
  const history = useHistory();
  const TeacherDashboardHandler = () => {
    history.push("/TestForm"); 
  };

  return (
    <div class="container">
      <div class="column-1 box">
        <h1>Tests</h1>
        <div class="innerbox">
          {/* <ul>Content</ul>
          <ul>Content</ul>
          <ul>Content</ul>
          <ul>Content</ul> */}
        </div>
        <div class="innerbox">
          {/* <ul>Content</ul>
          <ul>Content</ul>
          <ul>Content</ul>
          <ul>Content</ul> */}
        </div>
        <div class="innerbox"></div>
      </div>
      <div class="column-2 box">
        <h2>Mock Test</h2>
        <div class="list">
          <ul class="day">Monday, 23 August 2021 </ul>
          <ul class="time">8:00 AM TO 11:00 AM</ul>
          <ul class="dur">Duration</ul>
          <ul class="c1">3 Hours</ul>
          <ul class="level">Level </ul>
          <ul class="c2">Mains</ul>
          <ul class="set">Setter </ul>
          <ul class="nam">Setter-name</ul>
          <button class="button2">
            {/* <a href="/TestForm"><div class="tx">Create Test</div></a> */}
            <div class="tx">
            <button class="btn btn-success btn-block" id="btnViewResult" onClick={() => {
                                      TeacherDashboardHandler();
                                    }}>
                                    Create Test
                                  </button></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
