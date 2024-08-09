import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
             <div className='contact-me'>
                <FontAwesomeIcon icon={faEnvelope} id="font" />
                <span>Contact Me For Work</span>
                <FontAwesomeIcon icon={faDiscord} id="font" />
            </div>
            {/* <div className="footer-last" ></div> */}
        </div>
    );
}


export default Footer;