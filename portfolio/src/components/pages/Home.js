import React from "react";
import aboutBackground from './Images/aboutBackground.jpg';
import Jumbotron from "../Jumbotron";

function Home() {
  return (
    <div className="Container">
        <Jumbotron >
          <img src={aboutBackground} className="img-fluid" alt="McWay Falls" /> 
          <h1 className="Subject">Jesse Aldana</h1>
          <p className="Title">Full-Stack Software Developer</p>

        </Jumbotron>
    </div>
  );
}

export default Home;