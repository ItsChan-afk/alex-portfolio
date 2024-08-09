import React, { useState, useEffect } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/resources/images.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  // Filter images based on type
  const heightImages = images.filter(img => img.type === 'height');
  const widthImages = images.filter(img => img.type === 'width');

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'white' }}></h1>
      <br />
      <div className='portfolio-gallery'>
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
