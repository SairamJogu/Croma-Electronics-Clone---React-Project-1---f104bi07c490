import React from 'react';
import Navbar from '../../navbar/Navbar';
import HeroSlider from "../../slider/HeroSlider";
import Ads from "../../ads/Ads";
import Slider from "../../slider/slider/Slider";
import BestSellDeals from "../../../data/deals/BestSellDeals";
import Apple from "../../../components/ads/Apple";
import NewatCroma from "../../../components/ads/NewatCroma";
import AudioDeals from "../../slider/categorySlider/AudioDeals";
import BrandSlider from "../../slider/highlightSlider/BrandSlider";
import TopCategories from "../../slider/categorySlider/TopCategories";
import Footer from "../../footer/Footer";
import { Helmet } from 'react-helmet';

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Croma |Clone | Electronics | Online Electronics Shopping | Buy Electronics Online</title>
            </Helmet>
            <Navbar />
            <HeroSlider />
            <Ads />
            <Slider />
            <BestSellDeals />
            <Apple />
            <NewatCroma />
            <AudioDeals />
            <BrandSlider />
            <TopCategories />
            <Footer />
            </>
    )
}

export default HomePage