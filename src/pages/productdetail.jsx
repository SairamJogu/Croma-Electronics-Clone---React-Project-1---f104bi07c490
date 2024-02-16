import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/header";
import { GET_PRODUCT_DETAILS, PRODUCT_REVIEW } from "../components/Constants/Api";
import { useState, useEffect } from "react";
import { MdOutlineStar } from "react-icons/md";
import { Rating } from "@mui/material";

import "./productdetail.css";
import Footer from "../components/Footer/footer";
import ReviewList from "../components/CustomerReview/customerreview";
const Productdetail = () => {

    const navigate = useNavigate();
    const { product_id } = useParams();
    const [productdetails, setProductDetails] = useState({});
    const [productReviews, setProductReviews] = useState([]);
    const [cartcount, setcartcount] = useState(0);
    const [btn, setbtn] = useState(false);
    async function getProductDetails(id) {
        try {
            const response = await fetch(GET_PRODUCT_DETAILS(id), {
                headers: {
                    projectID: "f104bi07c490",
                }
            });
            const jsonData = await response.json();
            setProductDetails(jsonData.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function Getcart() {
        const promise = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
            headers: {
                projectID: "f104bi07c490",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const response = await promise.json();   
        if (response?.data?.items[0]?.product?._id) {
            setbtn(true);
        }
        else{
            setbtn(false);
        }
        setcartcount(response.results);
    }

    async function getProductReviews(id) {
        try {
            const response = await fetch(PRODUCT_REVIEW(id), {
                headers: {
                    'projectID': 'b0egrjqjnto2',
                }
            });
            const jsonData = await response.json();
            setProductReviews(jsonData.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const Addcart = async (productID) => {
        const options = {
            method: 'PATCH',
            headers: new Headers({ projectID: 'f104bi07c490', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }),
            quantity: 1,
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
        const resData = await data.json();
        Getcart();
    }

    function GotoCart(id) {
        if (localStorage.getItem('token')) {
            navigate("/checkout");
        }
        else {
            navigate("/login");
        }
    }

    function addedtocart(id) {
        if (localStorage.getItem('token')) {
    Addcart(id);
       alert("Product Added to Cart");
        }
        else {
            navigate("/login");
        }
    }

    useEffect(() => {
        getProductDetails(product_id);
        getProductReviews(product_id);
        Getcart();
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
           <Header cartcount={cartcount} />
            <div className="descriptionbox">
                <div className="sp-outer-box">
                    <div id="sp-left-box">
                        <div className="sp-container">
                            <img id="sp-image" src={productdetails.displayImage}/>
                        </div>
                    </div>
                    <div id="sp-right-box">
                        <h1 id="sp-product-name">
                            {productdetails.name}
                        </h1>
                        <div className="productdetailstar">
                            <MdOutlineStar className="stars" />
                            <MdOutlineStar className="stars" />
                            <MdOutlineStar className="stars" />
                            <MdOutlineStar className="stars" />
                            <MdOutlineStar className="stars" />
                        </div>
                        <div id="sp-price-box">
                            <span id="sp-discounted-amount">₹{productdetails.price}</span>
                            <span className="sp-mrp-text">MRP</span>
                            <span id="sp-original-amount"></span>
                            <span className="sp-tax-text">(Inclusive of all taxes)</span>
                        </div>
                        <hr />
                        <div className="key-features">
                            <h4>Key Features:</h4>
                            <ul>
                                {productdetails.features && productdetails.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />

                        <div className="sp-add-to-cart-btn">
                            <button className="sp-add-to-cart" onClick={() => GotoCart(product_id)}>Buy Now</button>
                            {
                                btn ? <button className="sp-buy-now" onClick={() => addedtocart(product_id)}>Go to Cart</button> : <button className="sp-buy-now" onClick={() => addedtocart(product_id)}>Add to Cart</button>
                            }
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <h2 >Overview</h2>
                    <div dangerouslySetInnerHTML={{ __html: productdetails.description }} />
                </div>
                <div className="container3">
                    <h2>Customer Reviews</h2>
                    <span>({productdetails.name})</span>
                    <ReviewList productReviews={productReviews} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Productdetail;