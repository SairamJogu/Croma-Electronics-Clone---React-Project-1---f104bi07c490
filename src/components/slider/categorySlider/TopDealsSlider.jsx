import React from 'react';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import  productData  from "../../../data/Deals1.json";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductList = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='wrapper text-white '>
            <h2 className='mb-2 font-bold text-2xl'>Deals of the Day</h2>         
            <Slider {...settings}>
            {productData.map((product, index) => (
                    <div key={product.id} className='w-1/4 h-1/4 '>
                        <div className='px-5 py-2 mx-3  rounded-lg  bg-black'>
                        <div className='dealimg'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h3 className='title'>{product.title}</h3>
                        <div className='flex'>
                            <p className='mr-1'>{product.newPrice}</p><del className='text-sm text-gray-400 mt-0.5'>{product.prevPrice}</del>                            
                        </div>
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                <AiFillStar key={starIndex} className={`rating-star ${(index === 1 || index === productData.length - 1) ? 'text-teal-500' : ''}`} />
                            ))}
                        </div>
                        </div>
                    </div>
            ))}
            </Slider>
        </div>
    );
};

export default ProductList;

