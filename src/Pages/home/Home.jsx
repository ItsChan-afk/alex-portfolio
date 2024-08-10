import React, { useState } from 'react';
import './home.css';
import picture2 from '/images/Homepage/bunny_plus_watermark.png';
import picture from '/images/Homepage/show_case.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';



function Icons() {
  return (
    <>
      <a href="https://www.twitch.tv/are_xu" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon id='icon' icon={faTwitch} style={{ color: 'white' }} />
      </a>
      <br></br>
      <a href='https://www.instagram.com/are.xu/'>
        <FontAwesomeIcon id='icon' icon={faInstagram} style={{ color: 'white' }} />
      </a>
      <br></br>
      <a href='https://www.twitch.tv/are_xu'>
        <FontAwesomeIcon id='icon' icon={faTwitch} style={{ color: 'white' }} />
      </a>
      <br></br>
      <a href='https://www.youtube.com/@are_xu'>
        <FontAwesomeIcon id='icon' icon={faYoutube} style={{ color: 'white' }} />
      </a>
      <br></br>
    </>
  )
}


function Intro() {
  return (
    <>
      <p>
        Hello, my name is <strong>Alex</strong> and I'm a
        <strong> freelancing artist </strong>
        I love making designs and concept
        art,and I stream occasionally.
        I’m still learning and experimenting with my art
      </p>
    </>
  );
}

function Home() {

  const [showText, setshowText] = useState(false);

  const toggleText = () => setshowText(!showText);



  return (
    <div className="home-container">

      <div className='left-side-container'>
        <div className='small-picture-container'>
          <img src={picture2} id='small-picture' alt="Alex's Picture" />
        </div>
        <div className='brand-icons'>
          <Icons />
        </div>
        <div className='introduction-text' style={{ color: 'white' }}>
          <Intro />
        </div>
      </div>
      <div className='right-side-container'>
        <div className='big-picture'>
          <a href='/portfolio'>
            <img
              onMouseEnter={toggleText}
              onMouseLeave={toggleText}
              src={picture}
              id='big-picture'
              alt="showcasing" />
          </a>
        </div>
        <div className='hidden-text'>
          {showText && <p id="hidden-text">click to check my <strong> Portfolio</strong></p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
