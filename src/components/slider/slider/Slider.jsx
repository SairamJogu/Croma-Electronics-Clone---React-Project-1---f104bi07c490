import React from 'react';
import CategorySlider from '../categorySlider/CategorySlider';
import TopDealsSlider  from '../categorySlider/TopDealsSlider';
import HighlightSlider from '../highlightSlider/HighlightSlider';
import TrendDealsSlider from '../categorySlider/TrendDealsSlider';

function Slider() {
    return (
        <>
            <CategorySlider />
            <TopDealsSlider />
            <HighlightSlider />
            <TrendDealsSlider />
        </>
    )
}

export default Slider