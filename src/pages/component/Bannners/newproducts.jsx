import React from "react";
import Header from "../../../components/Header/header";
import "./newproducts.css";

const Newproducts=()=>{
    return(
        <div>
            <Header/>
    
            <div className="productcomingsoon">
                <h2>New Products will be listed soon</h2>
                <img src="https://cdn5.vectorstock.com/i/1000x1000/44/74/new-product-coming-soon-poster-background-design-vector-24894474.jpg"/>
            </div>
        </div>
    )

}
export default Newproducts;