import React from 'react';
import './vtubers.css';
import vtubers from '/Users/mac/Documents/React/alex-portfolio/public/resources/vtubers.json';

const Vtubers = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Vtuber Clients</h1>
      <br />
      <div className='vtuber-container'>
        {vtubers.map((vtuber, index) => (
          <div key={index} className={`vtuber-column vtuber-column-${index % 4}`}>
            <a href={vtuber.link}>
              <img src={vtuber.image} alt={vtuber.name} />
            </a>
            <p style={{ textAlign: 'center', color: 'white' }}>{vtuber.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Vtubers;
