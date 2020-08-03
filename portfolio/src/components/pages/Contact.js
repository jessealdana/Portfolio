import React from "react";


function Contact(props) {
  return (
    <div className="container"> 

      <h2 style={{paddingTop: "10px"}}>Contact</h2>
      
      <hr />
      
      <br />

      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1"><p>Name</p></label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1"><p>Email</p></label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1"><p>Message</p></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button" className="button button-a button-big button-rounded" id="msg-button" onclick="window.location.href = 'mailto:jesse.aldana@gmail.com';">
          Submit
        </button>
      </form>

    <br />

    <div className="socials">
      <a href="https://www.linkedin.com/in/jesse-aldana-6b7a391a5 " target="_blank" class="btn btn-primary btn-lg" role="button">linkedin</a>
      <a href="https://github.com/jessealdana " target="_blank" class="btn btn-primary btn-lg" role="button">github</a>
      <a href="https://www.ugallery.com/artist/jesse-aldana " target="_blank" class="btn btn-primary btn-lg" role="button">UGallery</a>
      <br />
      <br />
      <p>email: jesse.aldana@gmail.com</p>
    </div>


    <br />


</div>
  );
}

export default Contact;