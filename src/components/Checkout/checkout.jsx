import React from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = (props) => {
    const { Price, paymentclick } = props;
    const navigate = useNavigate();

    const handlecheckout = () => {
        navigate("/checkout");

    }
    return (
        <div className="checkout-form">
            <div className="checkout-total-summary">
                <h3 className="checkout-form-heading">Order Summary</h3>
                <div className="cart-total-price">
                    <span className="text-capitalise">Original Price</span>
                    <span className="price-without-discount">₹{Price}</span>
                </div>
                <div className="cart-delivery-charges">
                    <span className="text-capitalise">Delivery Charges</span>
                    <span className="deilvery-price-tag">free</span>
                </div>
                <div className="cart-total-discounted-price">
                    <span className="amt-payable-tag">Total</span>
                    <span className="payable-amt">₹{Price}</span>
                </div>
                {paymentclick ?
                    (
                        ""
                    ) : (
                        <button className="cart-checkout-btn"onClick={handlecheckout}>checkout</button>
                    )
                }
            </div>
        </div>
    );
};
export default Checkout;
