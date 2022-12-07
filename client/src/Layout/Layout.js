import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbars/Navbar";
import Home from "../Containers/Home/Home";
import Login from "../Containers/Login/Login";
import SignUp from "../Containers/SignUp/SignUp";
import TestIntro from "../Containers/TestIntro/TestIntro";

import TestInfo from "../Containers/TestInfo/TestInfo";
import AnswerSheet from "../Containers/AnswerSheet/AnsweSheet";


import TestCreate from "../Containers/TestCreate/TestCreate";

import StudentDashboard from "../Containers/StudentDashboard/StudentDashboard";
import TeacherDashboard from "../Containers/TeacherDashboard/TeacherDashboard";

import TestInterface from "../Containers/TestInterface/TestInterface";
import TestResult from "../Containers/TestResult/TestResult";
import TestSubmit from "../Containers/TestSubmit/TestSubmit";
import TestConfirmation from "../Containers/Confirmation/Confirmation";
import TestForm from "../Containers/TestForm/TestForm";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/testintro" exact component={TestIntro}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/SignUp" exact component={SignUp}></Route>
        <Route path="/info" exact component={TestInfo}></Route>

        <Route path="/answersheet" exact component={AnswerSheet}></Route>

        <Route path="/testcreate" exact component={TestCreate}></Route>
        
        <Route
          path="/StudentDashboard"
          exact
          component={StudentDashboard}
        ></Route>
        <Route
          path="/TeacherDashboard"
          exact
          component={TeacherDashboard}
        ></Route>
        <Route path="/testinterface" exact component={TestInterface}></Route>
        <Route path="/testresult" exact component={TestResult}></Route>
        <Route path="/testSubmit" exact component={TestSubmit}></Route>
        <Route path="/TestConfirmation" exact component={TestConfirmation}></Route>
        <Route path="/TestForm" exact component={TestForm}></Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Layout;
