import React, { useEffect, useState } from 'react';
import './vtubers.css';

const Vtubers = () => {
  const [vtubers, setVtubers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from public directory
    fetch('/resources/vtubers.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVtubers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching vtubers:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading vtubers: {error.message}</p>;

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
  