import React from "react";
import "./whislistproduct.css";

const Whishlist = (props) => {
    const { wishlistproducts, addtocart, deletewish } = props;
    return (
        <div className="whislist">
            <div className="whislistimage">
                <img src={wishlistproducts.products.displayImage} alt="" />
            </div>
            <div className="whislist-details">
                <div className="whislist-name">
                    <p>{wishlistproducts.products.name}</p>
                    <span>₹{wishlistproducts.products.price}</span>
                </div>
            </div>
            <div className="whislistbuttons">
                <button className="whislisttocart" onClick={() => addtocart(wishlistproducts.products._id)}>Add to Cart</button>
                <button className="Removewhislist" onClick={() => deletewish(wishlistproducts.products._id)}>Remove</button>
            </div>
        </div>
    )
}
export default Whishlist;