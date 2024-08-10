    import React, { useEffect, useState } from 'react';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Slider from 'react-slick';
    import './carousel.css';

    const CarouselContainer = (props) => {
        const { settings, data } = props;

        return (
            <div className="carousel-container">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="carousel-item">
                            <img src={item.imageUrl} alt={item.altText} id='carousel-image' />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }

    export default CarouselContainer