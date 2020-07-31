import React from "react";
import dinner from "./Images/dinnerAndAmovie.jpg";
import password from "./Images/passwordGenerator.jpg";
import boardgame from "./Images/boardgame.png";
import burger from "./Images/burgerCompendium.png";
import fitness from "./Images/fitness.png";
import budget from "./Images/budget.png";
import Container from "../Container";



function Portfolio() {
  return (
    <Container>
        
        <div className="row">
          <div className="col-sm-3">
            <h2>Portfolio</h2>
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
            <a href="https://sharlenemay.github.io/dinner_movie/" target="_blank">
            <img src={dinner} className="img-fluid" alt="Dinner and a Movie"/>
            </a>
            <div id="caption">
              Movie and Foodie App
            </div>
          </div>  
          <div className="col-sm-6 PortfolioCard">
            <a href="https://jessealdana.github.io/passwordGenerator/" target="_blank">              
            <img src={password} className="img-fluid" alt="Password Generator"/>
            </a>  
            <div id="caption">
              Password Generator
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 PortfolioCard">
            <a href="https://tranquil-castle-93328.herokuapp.com" target="_blank">
            <img src={boardgame} className="img-fluid" alt="Boardgame"/>
            </a>
            <div id="caption">
              Boardgame
            </div>
          </div>
          <div className="col-sm-6 PortfoloCard">
            <a href="https://shrouded-forest-02182.herokuapp.com/" target="_blank">           
              <img src={burger} className="img-fluid" alt="Burger Compendium"/>
            </a>
            <div id="caption">
              Burger App
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 PortfolioCard">
            <a href="https://vast-eyrie-34582.herokuapp.com/?id=5eed4b160dcd3a00176bebd6" target="_blank">
              <img src={fitness} className="img-fluid" alt="Fitness Tracker"/>
            </a>
            <div id="caption">
              Fitness Tracker
            </div>
          </div>
          <div className="col-sm-6 PortfolioCard">
            <a href="https://fierce-falls-45988.herokuapp.com/" target="_blank">           
              <img src={budget} className="img-fluid" alt="Budget Tracker"/>
            </a>
            <div id="caption">
              Budget Tracker
            </div>
          </div>
        </div>

    </Container>
  );
}

export default Portfolio;