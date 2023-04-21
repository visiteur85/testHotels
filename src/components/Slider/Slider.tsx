import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/pictures/slider/Rectangle 23.png';
import image2 from '../../assets/pictures/slider/Rectangle 28.png';
import image3 from '../../assets/pictures/slider/Rectangle 24.png'
import image4 from '../../assets/pictures/slider/Rectangle 24.png'




export const Carousel = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (

        <Slider {...settings}>
            <div>
                <img src={image1} alt='slide-1' />
            </div>
            <div>
                <img src={image4}  alt='slide-3' />
            </div>
            <div>
                <img src={image2} alt='slide-2' />
            </div>
            <div>
                <img src={image3}  alt='slide-3' />
            </div>

        </Slider>

    );
};

