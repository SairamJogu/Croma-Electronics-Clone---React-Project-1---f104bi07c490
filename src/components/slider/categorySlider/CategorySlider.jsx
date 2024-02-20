import React from 'react';
import Slider from "react-slick";
import { catslider } from '../../../data/CatSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategorySlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 7
    };
    return (
        <div className="wrapper slider-container">
            <div className='category-slider mt-8'>
                <Slider {...settings}>
                    {catslider.map((category) => (
                        <div key={category.id} className='category-item'>
                            <img src={category.img} alt={category.name} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CategorySlider;