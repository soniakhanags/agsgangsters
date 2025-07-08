import React from "react";
import "./style.css";

const FurnitureWebsite = () => {
  return (
    <div className="container">
      <Navbar />
<Hero />
   
      <div className="navbar">
        <div className="logo">Edgecut</div>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Furnitures</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="login">login</div>
        <div className="search">Q</div>
      </div>

      <div className="header">
        <div className="leftside">
          <div className="content">
            <h1>For All Your <br /> Furniture <br /> Needs</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.</p>
            <div className="btns">
              <a href="#" className="contactbtn">Contact Us</a>
              <a href="#" className="Aboutbtn">About Us</a>
            </div>
          </div>
        </div>
        <div className="rightside">
          <img src="./image/slider-img.png" alt="" />
        </div>
      </div>

      <div className="outfurniture">
        <div className="heading">
          <h2>Our Furniture</h2>
          <p>which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an</p>
        </div>
      </div>

      <div className="cardwrapper">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div className="box" key={num}>
            <div className="img-box">
              <img src={`./image/f${num}.png`} alt="" />
            </div>
            <div className="box-content">
              <h5>House Chair Design</h5>
              <div className="price_box">
                <h6 className="price_heading"><span>$</span> 200.00</h6>
                <a href="">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-container">
        <div className="about-leftside">
          <img src="./image/about-img.png" alt="" />
        </div>
        <div className="about-rightside">
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum.</p>
          <a href="#"><span>Read More</span></a>
        </div>
      </div>

      <div className="blog-container">
        <div className="heading_container">
          <h2>LATEST BLOG</h2>
        </div>
        <div className="cardwrapper2">
          {[1, 2, 3].map((num) => (
            <div className="card" key={num}>
              <div className="img-box">
                <img src={`./image/b${num}.jpg`} alt="" />
              </div>
              <div className="card-content">
                <h5>Look even slightly believable. If you are</h5>
                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="client-container">
          <div className="heading_container">
            <h2>TESTIMONIAL</h2>
          </div>
          <div className="client-profie">
            <div className="client-leftside">
              <div className="profile"><img src="./image/client.jpg" alt="" /></div>
            </div>
            <div className="client-rightside">
              <h6>Batool</h6>
              <p>This is me Batool Mursaleen. I am the student of Amina Girls Higher Secondary School 21MPR Lodhran. Here we are doing web development.</p>
            </div>
          </div>
        </div>

        <div className="arrow-container">
          <div className="arrows">
            <div className="arrow"><img src="./image/arrow-left-line.png" alt="" /></div>
            <div className="arrow"><img src="./image/arrow-right-line.png" alt="" /></div>
          </div>
        </div>

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
            <img src="./image/map.png" alt="" />
          </div>
        </div>

        <div className="footer-container">
          <div className="contact_nav">
            <a href="#">
              <img src="./image/phone-line.png" alt="" />
              <span>Call : +01 123455678990</span>
            </a>
            <a href="#">
              <img src="./image/mail-line.png" alt="" />
              <span>Email : demo@gmail.com</span>
            </a>
            <a href="#">
              <img src="./image/map-line.png" alt="" />
              <span>Location</span>
            </a>
          </div>

          <div className="links">
            <div className="row">
              <div className="QUICK LINKS">
                <h4>QUICK LINKS</h4>
                <div className="link">
                  <a href="Home">Home</a>
                  <a href="">About</a>
                  <a href="">Furniture</a>
                  <a href="">Blog</a>
                  <a href="">Contact </a>
                </div>
              </div>
            </div>

            <div className="INSTAGRAM">
              <h5>INSTAGRAM FEEDS</h5>
              <div className="box">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div className="img" key={num}>
                    <img src={`./image/f${num}.png`} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="form">
              <h4>SIGN UP TO OUR NEWSLETTER</h4>
              <form action="">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">Subscribe</button>
              </form>
              <div className="social_icons">
                <a href="#"><img src="./image/facebook-fill.png" alt="" /></a>
                <a href="#"><img src="./image/twitter-line.png" alt="" /></a>
                <a href="#"><img src="./image/linkedin-fill.png" alt="" /></a>
                <a href="#"><img src="./image/instagram-line.png" alt="" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureWebsite;
