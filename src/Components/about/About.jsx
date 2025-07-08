import React from "react";
import about from '../../image/about-img.png';

const About = () => {
  return (
     <div className="about-container">
        <div className="about-leftside">
        <img src={about} alt="About" />

        </div>
        <div className="about-rightside">
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum.</p>
          <a href="/about"><span>Read More</span></a>
        </div>
      </div>
  );
};

export default About;
