import React from "react";
import "./Home.css";

const Home = () => {
  //header
  //info
  //school banner
  return (
    // <div>
    //   <header>PrepStation</header>
    // </div>
    <div>
      <div class="content">
        <div class="row">
          <div class="column" style={{ backgroundColor: "#aaa" }}>
          <div class="Heading" style={{textAlign: "center"}}>
            <h2>Scale Up</h2>
             <h4>Your preparation with</h4>
             <p >
              <h1>PrepStation </h1>
            </p>
          </div>
          </div>
          <div class="column" style={{ backgroundColor: "white" }}>
            <p>This Mock Test is to familiarize the students about processes of Computer Based Test (CBT), candidate can understand various processes of Computer Based Test (CBT) with the available mock test.</p>
            <img src="https://media.istockphoto.com/photos/setting-the-page-on-fire-with-some-hard-work-picture-id492198113?b=1&k=20&m=492198113&s=170667a&w=0&h=CBWxkL9fuZlpUKhnYVsWzcuGGrXiYTs7kxYgOlsSUoY=" alt="Girl in a jacket" width="500" height="600"></img>
          </div>
        </div>
      </div>
      <div class="waves"></div>
    </div>
  );
};

export default Home;
