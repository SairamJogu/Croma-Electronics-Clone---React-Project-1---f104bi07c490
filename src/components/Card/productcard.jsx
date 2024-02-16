import React from "react";
import { useState } from "react";
import "./productcard.css";
import { FaHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

const Productcard = (props) => {
  const navigate = useNavigate();
  const { displayImage, price, name, _id, ratings } = props.product;
  const [isClicked, setIsClicked] = useState(false);

  function handleimageerror(e){
    const s=e.currentTarget;
    s.setAttribute("src", "data:image/jpeg;base64,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")

  }
  
  const cardclick = () => {
    navigate(`/details/${_id}`)
  }

  function addtowhislist(_id) {
    if (localStorage.getItem('token')) {
      setIsClicked(true);
      AddtoWishlist(_id);
    }
    else {
      navigate("/login");
    }
  }

  function delefromwhislist(_id) {
    setIsClicked(false);
    DeleteWhislist(_id);
  }

  const DeleteWhislist = async (productID) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({ projectID: ' f104bi07c490', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
    }
    const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`, options)
    const resData = await data.json();
  }

  const AddtoWishlist = async (productId) => {
    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
      method: 'PATCH',
      headers: { 'projectID': 'b0egrjqjnto2', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const resData = await response.json();
  }

  return (
    <div className="main">
      {
        isClicked ? <FaHeart onClick={() => delefromwhislist(_id)} className="heart" style={{ fontSize: "1.2rem", color: "#12daa8" }} /> : <CiHeart className="heart" onClick={() => addtowhislist(_id)} />
      }
      <div className="image">
        <img src={displayImage} alt="" onClick={cardclick} onError={handleimageerror} />
      </div>
      <div className="product-details" onClick={cardclick}>
        <div className="product-name">
          <p style={{ width: "246.25px", height: "57px", fontWeight: "600", overflow: "hidden", }}>{name}</p>
          <span>₹{price}</span>
        </div>
      </div>
      <div className="cardstar">
        <Rating style={{ color: "#12daa8", fontSize: "1.2rem" }} name="read-only" value={ratings} readOnly />
      </div>
    </div>
  );
}
export default Productcard;

