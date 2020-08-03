import React from "react";
import selfieImage from './Images/selfie.jpg';


function About() {
  return (

  <div className="container">

        <div className="row">
          <div className="col-sm-3" style={{paddingTop: "10px"}}>
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>

      <br />

        <div className="row">
          <div className="col-sm-6">       
            <img src={selfieImage} className="img-fluid" alt="Jesse Aldana"/>
          </div>
          <div className="col-sm-6" style={{backgroundColor: "whitesmoke"}}>
            <p style={{paddingTop: "10px"}}>I am an artist.  I have a BA from Brown University in the Visual Arts and an MFA in painting from the New York Academy of Art.  After many years as a studio artist, watching the creative world become ever more digital, I am learning new skills through coding as I immerse myself in a new form of creativity.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12" style={{backgroundColor: "whitesmoke"}}>
            <p>I continue to make oil paintings and always will but working with others in the coding community has been inspiring and energizing in brand new ways.  As a nod to my continuing evolution and ongoing change, this website is styled in the tones of the "whitebox" traditionally associated with a contemporary brick and mortar art gallery.  As my understanding of code deepens, it will infuse these pages with new colors and styles.</p>
          </div>
        </div>    
    <div className="bottomrule">
      <hr />
    </div>
  </div>
  );
}

export default About;
