import React from 'react';
import b1 from '../../image/b1.jpg';
import b2 from '../../image/b2.jpg';
import b3 from '../../image/b3.jpg';

const images = [b1, b2, b3];

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="heading_container">
        <h2>LATEST BLOG</h2>
      </div>
      <div className="cardwrapper2">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <div className="img-box">
              <img src={image} alt={`Blog ${index + 1}`} />
            </div>
            <div className="card-content">
              <h5>Look even slightly believable. If you are</h5>
              <p>
                Alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <a href="blogs">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
