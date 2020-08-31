import React from "react";
import dinner from "./Images/dinnerAndAmovie.jpg";
import quiz from "./Images/quiz.png";
import boardgame from "./Images/boardgame.png";
import burger from "./Images/burgerCompendium.png";
import book from "./Images/imaginaryTraveler.png"
import budget from "./Images/budget.png";
import Container from "../Container";




function Portfolio() {
  return (
    
    <Container>
        
        <div className="row">
          <div className="col-sm-3">
            <h2 style={{paddingTop: "2px"}}>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>

        <br />


        <div className="row">
          <div className="col-sm-6 PortfolioCard">
            <a href="https://imaginarytraveler4.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={book} className="img-fluid" alt="Imaginary Traveler" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "300px"}}>
              Virtual Walkabout
            </div>
          </div>  
          <div className="col-sm-6 PortfolioCard">
            <a href="https://jessealdana.github.io/Coding-Quiz/" target="_blank" rel="noopener noreferrer">              
            <img src={quiz} className="img-fluid" alt="Coding Quiz" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>  
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "300px"}}>
              Coding Quiz
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 PortfolioCard">
            <a href="https://tranquil-castle-93328.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img src={boardgame} className="img-fluid" alt="Boardgame" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "300px"}}>
              Boardgame
            </div>
          </div>
          <div className="col-sm-6 PortfolioCard">
            <a href="https://shrouded-forest-02182.herokuapp.com/" target="_blank" rel="noopener noreferrer">           
              <img src={burger} className="img-fluid" alt="Burger Compendium" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "300px"}}>
              Burger App
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-sm-6 PortfolioCard">
            <a href="https://sharlenemay.github.io/dinner_movie/" target="_blank" rel="noopener noreferrer">
            <img src={dinner} className="img-fluid" alt="Dinner and a Movie" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "300px"}}>
              Movie and Foodie App
            </div>
          </div>  
          <div className="col-sm-6 PortfolioCard">
            <a href="https://fierce-falls-45988.herokuapp.com/" target="_blank" rel="noopener noreferrer">           
              <img src={budget} className="img-fluid" alt="Budget Tracker" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "300px"}}>
              Budget Tracker
            </div>
          </div>
        </div>

    </Container>
  );
}

export default Portfolio;