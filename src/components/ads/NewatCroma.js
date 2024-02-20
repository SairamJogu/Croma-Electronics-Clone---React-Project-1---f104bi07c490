import React from 'react';
import Slider from "react-slick";
import newCroma from '../../data/advs/newsatCroma.json'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NewCroma() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='wrapper'>
            <h2 className='mt-20 mb-5 font-bold text-2xl text-yellow-50'>New At Croma</h2>
            <div className='flex'>   
                <div className='p-2'>
                    <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706697808/Croma%20Assets/CMS/New%20at%20croma/HP_BigTile_NewAtCroma_LG_29jan2024_bt7jxg.png?tr=w-1024' alt='Inverter AC' className='rounded-lg'/>
                </div>
                <div className='p-2'>
                    <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707282841/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Feb/07012024/HP_BigTile_NewAtCroma_OnePlus_7Feb2024_qaqmrz.png?tr=w-1024' alt='onePlus' className='rounded-lg'/>
                </div>                
            </div>
            <Slider {...settings}> 
                {newCroma.map((newItems) => (
                    <div key={newItems.id} className='w-1/4'>
                        <div className='p-2'><img src={newItems.image} alt={newItems.name} className=' rounded-lg' /></div>
                    </div>
                ))}
            </Slider> 
        </div>
    )
}

export default NewCroma