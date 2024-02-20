import React from 'react';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import  trendData from "../../../data/TrendingDeals.json"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendList = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='wrapper text-white mt-20'>
            <h2 className='mb-2 font-bold text-2xl'>Trending Deals</h2>         
            <Slider {...settings}>
            {trendData.map(product => (
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
                                <AiFillStar key={starIndex}  />
                            ))}
                        </div>
                        </div>
                    </div>
            ))}
            </Slider>
        </div>
    );
};

export default TrendList;