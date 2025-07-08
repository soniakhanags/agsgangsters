import React from "react";

// Contact icons
import phoneIcon from "../../image/phone-line.png";
import mailIcon from "../../image/mail-line.png";
import mapIcon from "../../image/map-line.png";

// Instagram feeds
import f1 from "../../image/f1.png";
import f2 from "../../image/f2.png";
import f3 from "../../image/f3.png";
import f4 from "../../image/f4.png";
import f5 from "../../image/f5.png";
import f6 from "../../image/f6.png";

// Social icons
import twitterIcon from "../../image/twitter-line.png";
import linkedinIcon from "../../image/linkedin-fill.png";
import instagramIcon from "../../image/instagram-line.png";
import facebookIcon from "../../image/facebook-fill.png";
const instagramImages = [f1, f2, f3, f4, f5, f6];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact_nav">
        <a href="Phone">
          <img src={phoneIcon} alt="Phone" />
          <span>Call : +01 123455678990</span>
        </a>
        <a href="Email">
          <img src={mailIcon} alt="Email" />
          <span>Email : demo@gmail.com</span>
        </a>
        <a href="Location">
          <img src={mapIcon} alt="Location" />
          <span>Location</span>
        </a>
      </div>

      <div className="links">
        <div className="row">
          <div className="quick-links">
            <h4>QUICK LINKS</h4>
            <div className="link">
              <a href="Home">Home</a>
              <a href="About">About</a>
              <a href="Furniture">Furniture</a>
              <a href="Blog">Blog</a>
              <a href="Contact Us">Contact </a>
            </div>
          </div>
        </div>

        <div className="INSTAGRAM">
          <h5>INSTAGRAM FEEDS</h5>
          <div className="box">
            {instagramImages.map((img, idx) => (
              <div className="img" key={idx}>
                <img src={img} alt={`Instagram ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="form">
          <h4>SIGN UP TO OUR NEWSLETTER</h4>
          <form>
            <input type="text" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social_icons">
            <a href="facebook"><img src={facebookIcon} alt="facebook" /></a>
            <a href="Twitter"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="LinkedIn"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
