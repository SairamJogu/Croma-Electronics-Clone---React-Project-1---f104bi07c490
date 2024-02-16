import React from "react";
import { useState,useEffect } from "react";
import Header from "../Header/header";
import Banner from "../Banner/banner";
import "./home.css";
import Carousel from "../Banner/images";
import Footer from "../Footer/footer";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [cartcount, setcartcount]=useState(0);

    async function Headercartcount() {
        const promise = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
            headers: {
                projectID: "f104bi07c490",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const response = await promise.json();
        setcartcount(response.results);
    }
    
    const navigate=useNavigate();
    function bankdiscount(){
        navigate("/lp-more-for-your-money");
    }

  useEffect(() => {
    Headercartcount();
  }, []);

    return (
        <div className="Home"> 
            <Header cartcount={cartcount}/>
            <Banner />
            <div className="mobile-bank-discount" >
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705083527/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/Jan/14th%20to%2018th%20Jan/HP_2Split_ICICI_11Jan2024_slulln.png?tr=w-1024" alt="image1" onClick={bankdiscount}/>
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702458368/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/December/UPI%2C%20GST%2C%20Paytm%2C%20ZipCare%20Bank%20strip/ZipCare%20-%2028%20Nov%202023/ZipCare%201%20-%20EW/D_2Split_ZipcareEW_13Dec2023_wol1cc.png?tr=w-1024" alt="image2" onClick={bankdiscount}/>
            </div>
            <Carousel />
            <Footer/>
        </div >
    )

}
export default Home;
