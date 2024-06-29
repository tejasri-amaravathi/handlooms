import React from "react";
import gmailLogo from "../../images/gmail.png";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <h2>Contact Us!</h2>
      <div className="contact">
        <img src={gmailLogo} className="gmail-logo" />
        <span>Amaravathitejasri@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
