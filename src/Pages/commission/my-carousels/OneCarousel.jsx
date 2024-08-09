import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './onecarousel.css';

const OneCarousel = ({ referenceSheet }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch images from referenceSheet prop
        if (referenceSheet) {
            setImages(referenceSheet);
        }
    }, [referenceSheet]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='image-slide-container'>
                        <img src={image} alt={`slide-${index}`} className='one-images'/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OneCarousel;
