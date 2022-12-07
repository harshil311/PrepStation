import React from "react";
// import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "./nav.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-brand">
          {/* <a href="#" class="navbar-title"> */}
          PrepStation
          {/* </a> */}
        </div>

        {/* <button class="button button3">Get Started</button> */}
        <a href="/login"><button class="button button3">Get Started</button></a>
      </nav>
    </div>
  );
};

export default Navbar;
