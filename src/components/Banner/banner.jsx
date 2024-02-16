import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate=useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
  };

  const images = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702044593/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Deals%20Corner/2023/Dec/Rotating/HP/HP_DealsCorner_GIF_Compressed_8Dec2023_gazl4l.gif?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702556899/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/December/17%20Dec/desktop/HP_SB_17Dec2023_lghfdr.jpg?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702556900/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/December/17%20Dec/desktop/HP_TV_17Dec2023_jmonuy.jpg?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702556899/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/December/17%20Dec/desktop/HP_Tab_17Dec2023_vczor2.jpg?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702556899/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/December/17%20Dec/desktop/HP_Ref_17Dec2023_ytcwuo.jpg?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702556901/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/December/17%20Dec/desktop/HP_watch_17Dec2023_n8rbz4.jpg?tr=w-2048",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702033427/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Croma%20Gifting/Hp%20Rotating/HP_OLWedding_8dec2023_gnnv2u.jpg?tr=w-2048",
  ];

  const bannerclick=(e,index)=>{
    console.log(`Clicked on image with index: ${index}`);
    if(index==0){
      navigate("/dealscorner");
    }
    else if(index==1){ 
      navigate(`/search/audio`)
    }
    else if(index==2){
      navigate(`/search/tv`)
    }
    else if(index==3){
      navigate(`/search/tablet`)
    }
    else if(index==4){
      navigate(`/search/refrigerator`)
    }
    else if(index==5 || index==6){
      navigate(`/unboxed`)
    }
  }

  return (   
    <Slider {...settings}>
      {images.map((image, index) => {
        return (
          <div className="image" onClick={(e) => bannerclick(e, index)}>
            <img src={image} style={{width:"100%"}}alt={`Slide ${index + 1}`} />
          </div>
        );
      })}
    </Slider>
  );
};

export default Banner;
