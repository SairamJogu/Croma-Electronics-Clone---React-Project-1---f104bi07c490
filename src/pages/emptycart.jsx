import React from "react";
import Header from "../components/Header/header"; 
import { Link } from "react-router-dom";
const Emptycart = () => {
    return (
        <div className="emptycart">
           <Header/>
            <h2 style={{ textAlign: "left", marginLeft: "8rem"}}>YOUR CART</h2>
            <div className="image" style={{ margin: "auto" }}>
                <img src="https://kind-leakey-f7509c.netlify.app/img/Empty.png" style={{ width: "260px", height: "150px" }} alt="empty-cart" />
                <h3 style={{ fontWeight: "800" }}> Your Cart is Empty</h3>
                <Link to="/" style={{ color: "#088466", fontWeight: "800", textDecoration:"underline" }}>continue shopping</Link>
            </div>
        </div>
    )
}

export default Emptycart;