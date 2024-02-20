import React from 'react';
import Slider from "react-slick";
import brands from "../../../data/Brands.json";
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
            <h2 className='mb-2 font-bold text-2xl text-white'>Top Brands</h2>  
                <Slider {...settings}>
                    {brands.map((category) => (
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