import React from "react";
import "./checkoutheader.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Checkoutheader = () => {
    const navigate = useNavigate();
    const checkheader = () => {
        navigate("/");


    }
    return (
        <div className="checkheader">
            <div className="logo">
                <div>
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="chromalogo" onClick={checkheader} />
                </div>
                <div className="shippaybtn">
                    <Link to="/cart" className="checkoutcartbtn">Cart</Link>
                    <Link to="/checkout" className="checkoutshippingbtn">Shipping</Link>
                    <Link to="/payment" id="paybtn" className="checkoutspaymentbtn">Payment</Link>
                </div>
            </div>
        </div>
    )
}
export default Checkoutheader;