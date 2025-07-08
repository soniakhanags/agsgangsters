import React from 'react';


import f1 from '../../image/f1.png';
import f2 from '../../image/f2.png';
import f3 from '../../image/f3.png';
import f4 from '../../image/f4.png';
import f5 from '../../image/f5.png';
import f6 from '../../image/f6.png';

const Furniture = () => {
  const handleBuyNow = (id) => {
    console.log(`Buy Now clicked for item ${id}`);
    
  };

  
  const images = [f1, f2, f3, f4, f5, f6];

  return (
    <div>
      <div className="outfurniture">
        <div className="heading">
          <h2>Our Furniture</h2>
          <p>
            which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
          </p>
        </div>
      </div>

      <div className="cardwrapper">
        {images.map((img, index) => (
          <div className="box" key={index}>
            <div className="img-box">
              <img src={img} alt={`Furniture ${index + 1}`} />
            </div>
            <div className="box-content">
              <h5>House Chair Design</h5>
              <div className="price_box">
                <h6 className="price_heading"><span>$</span> 200.00</h6>
                
               
                <button
                  className="buy-btn"
                  onClick={() => handleBuyNow(index + 1)}
                >
                  Buy Now
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
