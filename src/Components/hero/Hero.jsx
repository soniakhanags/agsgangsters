import React from "react";
import slider from '../../image/slider-img.png';

const Hero = () => {
  return (
    <div className="header">
      <div className="leftside">
        <div className="content">
          <h1>For All Your <br /> Furniture <br /> Needs</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.</p>
          <div className="btns">
            <a href="/contact" className="contactbtn">Contact Us</a>
            <a href="/about" className="Aboutbtn">About Us</a>
          </div>
        </div>
      </div>
      <div className="rightside">
        <img src={slider} alt="slider" />
      </div>
    </div>
  );
};

export default Hero;
