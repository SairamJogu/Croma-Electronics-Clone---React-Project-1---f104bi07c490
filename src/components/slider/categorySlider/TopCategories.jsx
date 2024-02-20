import React from 'react';
import Slider from "react-slick";
import categories from '../../../data/TopDeals.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCategories = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='wrapper'>
            <h2 className='mt-2 mb-1 font-bold text-2xl text-white'>Top Categories</h2>  
            <Slider {...settings}>
                {categories.map((category) => (
                    <div key={category.id} className='p-4  my-5'>
                        <div className='border border-gray-600 rounded-lg'>
                            <img src={category.image} alt={category.name} className='rounded-lg' />
                            <h2 className='text-white text-xl text-center font-bold p-4 cursor-pointer'>{category.title}</h2> 
                        </div>                   
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCategories;