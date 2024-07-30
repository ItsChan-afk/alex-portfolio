import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './commission.css';
import img1 from '/images/Commission Tab/1 - semi realism/1.png';
import img2 from '/images/Commission Tab/1 - semi realism/2.png';
import img3 from '/images/Commission Tab/1 - semi realism/3.png';
import s_img1 from '/images/Commission Tab/3 - Reference Sheet/1.png';
import s_img2 from '/images/Commission Tab/3 - Reference Sheet/3.png';
import s_img3 from '/images/Commission Tab/3 - Reference Sheet/4.png'
import s_img4 from '/images/Commission Tab/3 - Reference Sheet/5.png';
import s_img5 from '/images/Commission Tab/3 - Reference Sheet/5.png';
import s_img6 from '/images/Commission Tab/3 - Reference Sheet/1.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Commission = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings_two = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='left-sub-container'>
          <article className='article-container'>
            <h4 style={{ textAlign: 'center' }}>Realistic / Semi Realism</h4>
            <div className='item'>
              <p className='description'>Price Range</p>
              <p className='price'>$400</p>
            </div>
            <div className='item'>
              <p className='description'>Additional background </p>
              <p className='price'>$50</p>
            </div>
            <div className='item'>
              <p className='description'>I'll only be taking up to <strong>Bust Shot</strong> for this <strong>style</strong></p>
              <p className='price'></p>
            </div>
          </article>
        </div>
        <div className='right-sub-container'>
          <div className='carousel-container'>
            <div className="slider-container">
              <Slider {...settings_two}>
                <div className='multiple-image-container'>
                  <img src={s_img1} alt='picture 1' />
                </div>
                <div className='multiple-image-container'>
                  <img src={s_img2} alt='picture 1' />
                </div>
                <div className='multiple-image-container'>
                  <img src={s_img3} alt='picture 1' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='sub-container'>
        <div className='reverse-left-sub-container'>
          <div className='carousel-container'>
            <div className="slider-container">
              <Slider {...settings}>
                <div className='image-container'>
                  <img src={img1} alt='picture 1' />
                </div>
                <div className='image-container'>
                  <img src={img2} alt='picture 1' />
                </div>
                <div className='image-container'>
                  <img src={img3} alt='picture 1' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className='reverse-right-sub-container'>
          <article className='article-container'>
            <h4 style={{ textAlign: 'center' }}>Anime art style</h4>
            <div className='item'>
              <p className='description'>Head Shot </p>
              <p className='price'>$100+</p>
            </div>
            <div className='item'>
              <p className='description'>Bust Shot</p>
              <p className='price'>$200+</p>
            </div>
            <div className='item'>
              <p className='description'>Full Body / Up to thigh</p>
              <p className='price'>$500</p>
            </div>
            <div className='item'>
              <p className='description'>Additional Character</p>
              <p className='price'>$100+</p>
            </div>
            <div className='item'>
              <p className='description'>Additional background</p>
              <p className='price'>$100/50+</p>
            </div>
          </article>
        </div>
      </div>
      <div className='line'></div>
      <div className='sub-container'>
        <div className='left-sub-container'>
          <article className='article-container'>
            <h4 style={{ textAlign: 'center' }}>Realistic / Semi Realism</h4>
            <div className='item'>
              <p className='description'>Price Range</p>
              <p className='price'>[$30]</p>
            </div>
            <div className='item'>
              <p className='description'>Additional background / Objects</p>
              <p className='price'>[$30]</p>
            </div>
            <div className='item'>
              <p className='description'>I'll only be taking up to <strong>Bust Shot</strong> for this <strong>style</strong></p>
              <p className='price'>[$30]</p>
            </div>
          </article>
        </div>
        <div className='right-sub-container'>
          <div className='carousel-container'>
            <div className="slider-container">
              <Slider {...settings_two}>
                <div className='multiple-image-container'>
                  <img src={s_img4} alt='picture unos' />
                </div>
                <div className='multiple-image-container'>
                  <img src={s_img5} alt='picture2' />
                </div>
                <div className='multiple-image-container'>
                  <img src={s_img6} alt='picture 1' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='sub-container'>
        <div className='reverse-left-sub-container'>
          <div className='carousel-container'>
            <div className="slider-container">
              <Slider {...settings}>
                <div className='image-container'>
                  <img src={img1} alt='picture-1' />
                </div>
                <div className='image-container'>
                  <img src={img2} alt='picture-2' />
                </div>
                <div className='image-container'>
                  <img src={img3} alt='picture-3' />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className='reverse-right-sub-container'>
          <article className='article-container'>
            <h4 style={{ textAlign: 'center' }}>Realistic / Semi Realism</h4>
            <div className='item'>
              <p className='description'>Price Range</p>
              <p className='price'>[$30]</p>
            </div>
            <div className='item'>
              <p className='description'>Additional background / Objects</p>
              <p className='price'>[$30]</p>
            </div>
            <div className='item'>
              <p className='description'>I'll only be taking up to <strong>Bust Shot</strong> for this <strong>style</strong></p>
              <p className='price'>[$30]</p>
            </div>
            <div className='item'>
              <p className='description'>I'll only be taking up to <strong>Bust Shot</strong> for this <strong>style</strong></p>
              <p className='price'>[$30]</p>
            </div>
            <div className='item'>
              <p className='description'>I'll only be taking up to <strong>Bust Shot</strong> for this <strong>style</strong></p>
              <p className='price'>[$30]</p>
            </div>
          </article>
        </div>
      </div>
      <div className='accordion-sub-container'>
        <div className='accordion-container'>
          <Accordion className='custom-accordion'>
            <AccordionSummary
              sx={{
                backgroundColor: "#690c0c",
                color: "white",
                border: '3px solid #140F12',
                height:'5vh',
               
              }}
              expandIcon={<ExpandMoreIcon style={{ color: '#fff' }}  />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p>Subjects I might not draw!</p>
            </AccordionSummary>
            <AccordionDetails className='accordion-details'>
              <p>[x] Muscular Characters</p>
              <p>[x] Explicit NSFW</p>
              <p>[x] Extreme Gore</p>
              <p>[x] Offensive Themes</p>
            </AccordionDetails>
          </Accordion>
          <Accordion className='custom-accordion'>
            <AccordionSummary
              sx={{
                backgroundColor: "#690c0c",
                color: "white",
                border: '3px solid #140F12',
                height:'5vh',
               
              }}
              expandIcon={<ExpandMoreIcon style={{ color: '#fff' }}  />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p>Terms of Service and condition</p>

            </AccordionSummary>
            <AccordionDetails className='accordion-details'>
              <ul>
                <li> You will not AND cannot use my art for NFTs and AI art.</li>
                <li>I am allowed to post the commission and use it in my portfolio if I choose to.</li>
                <li>I reserve the right to decline any commissions for whatever given reason.</li>
                <li>Crediting me is required for whatever you decide to use the work for.
                </li>
                <li>Minor changes are acceptable during the sketch and line art phase, however the price may increase the more/bigger adjustments that would be needed throughout the commission.
                </li>
                <li>If you wish to have your project done sooner there will be a 25% fee.</li>
                <li>Payment plans are 50% or full first, can negotiate if client needs adjustments.
                </li>
                <li>Please let me know when you commission, if the artwork is for personal or commercial use. (as that would require a higher fee). 
                </li>
                <li>
                  Payment will be through PayPal invoices and Western Union transfer, only.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>

  )
}

export default Commission