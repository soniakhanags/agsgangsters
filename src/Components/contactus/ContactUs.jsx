import React from "react";
import mapImage from "../../image/map.png"; 

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="cotact-leftside">
        <div className="form_container">
          <div className="heading_container">
            <h2>Contact Us</h2>
          </div>
          <form action="#">
            <div><input type="text" placeholder="Your Name" /></div>
            <div><input type="text" placeholder="Phone Number" /></div>
            <div><input type="email" placeholder="Email" /></div>
            <div><input type="text" className="message-box" placeholder="Message" /></div>
            <div className="btn_box"><button>SEND</button></div>
          </form>
        </div>
      </div>
      <div className="contact-rightsie">
        <img src={mapImage} alt="Map" />
      </div>
    </div>
  );
};

export default ContactUs;
