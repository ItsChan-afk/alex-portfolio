import React, { useState, useEffect } from 'react';
import './portfolio.css';
import imagesData from '/Users/mac/Documents/React/alex-portfolio/public/resources/images.json'; // Import the JSON file

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesData);
  }, []);

  // Filter images based on type
  const heightImages = images.filter(img => img.type === 'height');
  const widthImages = images.filter(img => img.type === 'width');

  return (
    <>
    <h1 style={{textAlign:'center' , color:'white'}}>My Portfolios</h1>
    <br/>
    <div className='portfolio-gallery'>

      {/* Container for images with bigger height */}
      <div className='gallery-for-height'>
        {heightImages.map((item, index) => (
          <div className='pic' key={index}>
            <img src={item.src} alt={`Gallery item ${item.id}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>

      {/* Container for images with bigger width */}
      <div className='gallery-for-width'>
        {widthImages.map((item, index) => (
          <div className='pic' key={index}>
            <img src={item.src} alt={`Gallery item ${item.id}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Portfolio;
