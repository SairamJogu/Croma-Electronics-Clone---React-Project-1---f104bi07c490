import React from 'react';
import Slider from "react-slick";
import highlightsData from '../../../data/Highlights.json'

const HighlightSlider = () => {
    const highlights1 = highlightsData.Highlights1 || [];
    const highlights2 = highlightsData.Highlight2 || [];

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='wrapper'>
            <h2 className='mt-20 mb-5 font-bold text-2xl text-white'>Highlights</h2>
            <div>
                <Slider {...settings}>
                    {highlights1.map(item => (
                        <div key={item.id} className='w-1/4 h-1/4'>
                            <div className='p-2'>                            
                                <img src={item.img} alt={item.name} className='w-full h-full rounded-lg' />
                            </div>
                        </div>
                    ))}
                </Slider>                
            </div>
            <div>
                <Slider {...settings}>
                    {highlights2.map(item => (
                        <div key={item.id} className='w-1/4 h-1/4'>
                            <div className='p-2'>                            
                                <img src={item.img} alt={item.name} className='w-full h-full rounded-lg' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HighlightSlider