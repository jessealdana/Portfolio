import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Folio from "./components/pages/Folio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/folio" component={Folio} />
            <Route path="/contact" component={Contact} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
