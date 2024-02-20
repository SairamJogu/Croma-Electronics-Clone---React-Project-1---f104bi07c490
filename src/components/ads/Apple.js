import React from 'react';
import Slider from "react-slick";
import appleProducts from '../../data/advs/apple.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Apple() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='wrapper'>
            <h2 className='mt-20 mb-5 font-bold text-2xl text-yellow-50'>Apple At Croma</h2>
            <div className='flex w-1/2'>   
                <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707025069/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Feb/04022024/HP_2Split_AppleAtCroma_iPhone15_4Feb2024_epyism.png?tr=w-1024' alt='iPhone 15' className='p-2'/>
                <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706851592/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Feb/02022024/HP_2Split_AppleAtCroma_15Plus_2Feb2024_y9t7u0.png?tr=w-1024' alt='iPhone 15 Plus' className='p-2'/>
            </div>
            <Slider {...settings}> 
                {appleProducts.map((product) => (
                    <div key={product.id} className='w-1/4'>
                        <img src={product.image} alt={product.name} className='p-2' />
                    </div>
                ))}
            </Slider> 
        </div>
    )
}

export default Apple