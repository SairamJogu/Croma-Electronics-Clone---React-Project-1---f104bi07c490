import React from "react";
import "./dropcard.css";
import { IoStarSharp } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropcard = (props) => {

  const [isClicked, setIsClicked] = useState(false);
  const { product, click } = props;
  const navigate = useNavigate();

  const DeleteWhislist = async (productID) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({ projectID: 'f104bi07c490', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
    }
    const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`, options)
    const resData = await data.json();
  }

  const AddtoWishlist = async (productId) => {
    const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
      method: 'PATCH',
      headers: { 'projectID': 'f104bi07c490', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const resData = await response.json();
  }

  function addtowhislist(_id) {
    if (localStorage.getItem('token')) {
      setIsClicked(true);
      AddtoWishlist(_id);
      alert("Product Added to Whislist");
    }
    else {
      navigate("/login");
    }
  }

  function delefromwhislist(_id) {
    setIsClicked(false);
    alert("Product removed from Whislist");
    DeleteWhislist(_id);
  }
  
  return (
    <div className="dropcontainer">
      <div className="imagecontainer">   
        <img src={product.displayImage} alt="" onClick={() => click(product._id)} />
        {
          isClicked ? <FaHeart onClick={() => delefromwhislist(product._id)} className="dropheart" style={{ fontSize: "1.2rem", color: "#12daa8" }} /> : <CiHeart className="dropheart" onClick={() => addtowhislist(product._id)} />
        }
      </div>
      <div className="dropproduct-details">
        <div className="dropproduct-name">
          <p onClick={() => click(product._id)}>{product.name}</p>
          <span className="dropratings">{Math.round(product.ratings * 10) / 10}<span> <IoStarSharp style={{ width: "16px", height: "16px", color: "#12daa8" }} onClick={() => click(product._id)} /></span></span>
          <span>₹{product.price}</span>
          <span><LiaToolsSolid className="droptool" /><span className="droptooltext" >Standard Delivery by Tomorrow</span></span>
        </div>
      </div>
      <div style={{ color: "#393939" }}>________________________________________</div>
    </div>
  );
}
export default Dropcard;