import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        customPaging: function (i) {
        // Customize the appearance of dots here
        return <div style={{ width: "5px", height: "5px", margin: "0 5px", background: "white", borderRadius: "50%" }} />;
        }
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Link to="/accessories">
                    <div>
                        <img src={require('../assets/images/Hero-Slider/hero-slider1.gif')} alt='Slider Img 1' />
                    </div>
                </Link>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider2.webp')} alt='Slider Img 2' />
                </div>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider3.webp')} alt='Slider Img 3' />
                </div>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider4.webp')} alt='Slider Img 4' />
                </div>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider5.webp')} alt='Slider Img 5' />
                </div>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider6.webp')} alt='Slider Img 6' />
                </div>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider7.webp')} alt='Slider Img 7' />
                </div>
                <div>
                    <img src={require('../assets/images/Hero-Slider/hero-slider8.webp')} alt='Slider Img 8' />
                </div>
            </Slider>
        </div>
    );
}


export default HeroSlider;