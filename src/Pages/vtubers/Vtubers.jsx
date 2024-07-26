import React from 'react'
import './vtubers.css'

import aria from '/images/vtuber showcase/1-Aria.png';
import mochi from '/images/vtuber showcase/2-Mochi.png';
import airi from '/images/vtuber showcase/3-Airi.png';
import larxa from '/images/vtuber showcase/4-Larxa.png';
import helleija from '/images/vtuber showcase/6-Helleija.png';
import ninon from '/images/vtuber showcase/8-Ninon.png';
import robot from '/images/vtuber showcase/7-Sherry.png';
import cookie from '/images/vtuber showcase/5-Brieatcookiebox.png';

const Vtubers = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Vtuber Clients</h1>
      <br />
      <div className='vtuber-container'>

        <div className='vtuber-first-column'>
          {/* first row of the column container */}
          <a href='https://www.twitch.tv/aria_vlive'>
            <img src={aria} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Aria</p>

          {/* second row of the column container */}
          <a href='https://www.twitch.tv/breat'>
            <img src={cookie} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Bri</p>
        </div>

        <div className='vtuber-second-column'>
          {/* first row of second column container */}
          <a href='https://www.twitch.tv/h1sh1m0ch1'>
            <img src={mochi} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>h1sh1m0ch1</p>

          {/* second row of second column container */}
          <a href='https://www.twitch.tv/ninonvt'>
            <img src={ninon} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Ninon</p>
        </div>

        <div className='vtuber-third-column'>
          {/* first row of third column container */}
          <a href='https://www.twitch.tv/airinn_vt'>
            <img src={airi} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Airi</p>
          {/* second row of third column container */}
          <a href='https://www.twitch.tv/sherryvt'>
            <img src={robot} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Sherry</p>
        </div>

        {/* fourth column container */}
        <div className='vtuber-fourth-column'>
          {/* first row of fourth column container */}
          <a href='https://www.twitch.tv/larxa'>
            <img src={larxa} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Larxa</p>

          {/* second row of fourth column container */}
          <a>
            <img src={helleija} alt='vtuber' />
          </a>
          <p style={{ textAlign: 'center', color: 'white' }}>Helleija</p>
        </div>
      </div>
    </>
  )
}

export default Vtubers;
