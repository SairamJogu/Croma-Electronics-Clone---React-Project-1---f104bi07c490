import React, { useEffect } from "react";
import "./header.css";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import BasicMenu from "../Dropdown/dropdown";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_PRODUCT_LIST } from "../Constants/Api";
import Maininput from "../Input/input";
import { CiHeart } from "react-icons/ci";

const Header = (props) => {
  const navigate = useNavigate()
  const [dropdown, setdropdown] = useState([]);
  const [open, setopen] = useState(false);

  const handlelogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem("token");
      navigate("/");
      alert(" You logged out successfully!")
    }
    else {
      navigate("/login");
    }
  }

  async function getDropdown() {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",
      {
        headers: {
          projectID: "b0egrjqjnto2",
        },
      }
    );
    const drop = await response.json();
    setdropdown(drop.data);
  }

  useEffect(() => {
    getDropdown();
  }, []);

  return (
    <header className="header">
      <div className="content1">
        <div className="headermobileview" >
          <div>
            <Link to="/">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                alt="chromalogo"
              />
            </Link>
          </div>
          <div className="Menu">
            <BasicMenu categories={dropdown} className="dropdown" />
            <p className="text-sm">Menu</p>
          </div>
        </div>
        <Maininput />
      </div>
      <div className="headersection2">
        <div className="headerlocation">
          <MdLocationOn className="MdLocationOn" />
          <p className="headerlocationname">Mumbai 400049</p>
          <IoPencil className="text-xs" />
        </div>
        <div className="headerusericon">
          <FaUser onClick={() => setopen(!open)} />
          {open && (
            <div className="headerdropdown-content">
              {localStorage.getItem('token') ?
                <ul className="headerprofile">
                  <li><Link to="/mywhislist" style={{ color: "white" }}>My Whishlist</Link></li>
                  <li><Link to="/myorders" style={{ color: "white" }}>My Orders</Link></li>
                  <li onClick={handlelogout}>Logout</li>
                </ul> : (
                  <ul className="headerprofile">
                    <li onClick={handlelogout}>Login</li>
                  </ul>
                )
              }
            </div>
          )}
        </div>
        <div className="headercarticon" >
          {
            <Link to="/cart" className="carticon"><FaCartShopping /></Link>
          }
          <p id="cartcountstore" style={{ background: "green", width: "0.85rem", height: "0.95rem", textAlign: "center" }}>{props.cartcount ? props.cartcount : 0}</p>
        </div>
      </div>
    </header>
  );
};


export default Header;
