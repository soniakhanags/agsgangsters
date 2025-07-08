import React from "react";
import clientImage from "../../image/client.jpg";
import arrowLeft from "../../image/arrow-left-line.png";
import arrowRight from "../../image/arrow-right-line.png";

const Feedback = () => {
  return (
    <div>
      <div className="client-container">
        <div className="heading_container">
          <h2>TESTIMONIAL</h2>
        </div>
        <div className="client-profie">
          <div className="client-leftside">
            <div className="profile">
              <img src={clientImage} alt="Client" />
            </div>
          </div>
          <div className="client-rightside">
            <h6>Batool</h6>
            <p>
              This is me Batool Mursaleen. I am the student of Amina Girls Higher Secondary School 21MPR Lodhran. Here we are doing web development.
            </p>
          </div>
        </div>
      </div>

      <div className="arrow-container">
        <div className="arrows">
          <div className="arrow">
            <img src={arrowLeft} alt="Left Arrow" />
          </div>
          <div className="arrow">
            <img src={arrowRight} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
