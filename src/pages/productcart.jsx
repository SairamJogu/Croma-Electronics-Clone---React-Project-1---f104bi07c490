import React from "react";
import "./productcart.css";
import { MdOutlineStar } from "react-icons/md";
import Checkout from "../components/Checkout/checkout";
const Cartproducts = (props) => {
    const { product,movetowishlist, cardClick } = props;
    return (

        <div className="maincart">
            <div className="cart" >
                <div className="cartimages">
                    <img src={product && product?.product?.displayImage} alt="cartimages"style={{ width: "200px", height: "200px" }}/>
                </div>
                <div className="cartseconndivnames">
                    <div className="cartcontent">
                        <div className="carttitle">
                            <p className="cartproductname">{product?.product?.name}</p>
                            <div className="star">
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                                <MdOutlineStar className="stars" />
                            </div>
                            <div style={{ marginTop: "1rem" }}>Standard Delivery <br /> February 2024</div>
                            <div className="Button" style={{ marginTop: "1rem" }}>
                                <button className="btn1"onClick={() => movetowishlist(product.product._id)}>Move to Wishlist</button>
                                <button className="btn2" onClick={() => cardClick(product.product._id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                    <h2>₹{product?.product?.price}</h2>
                </div>
            </div >
        </div>
    )
}
export default Cartproducts;