import React, { useState, useEffect } from "react";
import "./inputproducts.css";

import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/header";
import Dropcard from "../components/Card/dropcard";
import { GET_PRODUCTS_CATEGORYWISE } from "../components/Constants/Api";

const Inputproduct = () => {
  const [userdropdownvalues, setuserdropdown] = useState([]);
  const [userbrands, setuserBrands] = useState([]);
  const [usersellerTag, setuserSellerTag] = useState([]);
  const navigate = useNavigate();
  const [userproducts, setuserproducts] = useState([]);
  const [userproductheading, setuserproductheading] = useState(userinput);
  const { userinput } = useParams();

  async function alldropdowncategories() {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories`, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      const jsonData = await response.json();
      setuserdropdown(jsonData.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async function userbrand(value, inputdata) {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"brand":"${value}","subCategory":"${inputdata}"}`, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      const jsonData = await response.json();
      setuserproducts(jsonData.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllProductsCategoryWise(category) {
    setuserproductheading(category)
    try {
      const response = await fetch(GET_PRODUCTS_CATEGORYWISE(category), {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      const jsonData = await response.json();
      const updatedBrand = [
        ...new Set(
          jsonData.data.map((item) => {
            if (item.brand) {
              return item.brand;
            }
          })
        ),
      ];
      const sellerproductnames = [
        ...new Set(
          jsonData.data.map((item) => {
            if (item.sellerTag) {
              return item.sellerTag;
            }
          })
        ),
      ];
      setuserproducts(jsonData.data);
      setuserBrands(updatedBrand);
      setuserSellerTag(sellerproductnames);
    } catch (error) {
      console.log("error", error)
    }
  }
  const cardclick = (_id) => {
    navigate(`/details/${_id}`)
  }
  const updateSuggestions = async (value) => {
    if (value == "washingmachine") {
      value = "washingMachine";
      setuserproductheading(value);
    }
    else if (value == "mobiles") {
      value = "iphone";
      setuserproductheading(value);
    }
    if (value == "laptop" || value == "ac" || value == "washingMachine" || value == "kitchenappliances" || value == "tablet" || value == "audio" || value == "health" || value == "refrigerator" || value == "travel" || value == "mobile") {
      setuserproductheading(value);
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory":"${value}"}`,
          {
            headers: {
              projectID: "f104bi07c490",
            },
          }
        );
        const results = await response.json();
        const updatedBrand = [
          ...new Set(
            results.data.map((item) => {
              if (item.brand) {
                return item.brand;
              }
            })
          ),
        ];
        const sellerproductnames = [
          ...new Set(
            results.data.map((item) => {
              if (item.sellerTag) {
                return item.sellerTag;
              }
            })
          ),
        ];
        setuserproductheading(userinput)
        setuserproducts(results.data);
        setuserBrands(updatedBrand);
        setuserSellerTag(sellerproductnames);
      }
      catch (error) {
        console.error("Error fetching suggestions:", error);
      }

    }
    else {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&search={"name":"${value}"}`,
          {
            headers: {
              projectID: "f104bi07c490",
            },
          }
        );
        const results = await response.json();

        const updatedBrand = [
          ...new Set(
            results.data.map((item) => {
              if (item.brand) {
                return item.brand;
              }
            })
          ),
        ];
        const sellerproductnames = [
          ...new Set(
            results.data.map((item) => {
              if (item.sellerTag) {
                return item.sellerTag;
              }
            })
          ),
        ];
        setuserproductheading(userinput);
        setuserproducts(results.data);
        setuserBrands(updatedBrand);
        setuserSellerTag(sellerproductnames);
      }
      catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }
  }

  useEffect(() => {
    if (userinput) {
      updateSuggestions(userinput.toLowerCase());
    }
    alldropdowncategories();
    window.scrollTo(0, 0);
  }, [userinput]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "top rated") {
      const topRatedProducts = userproducts.filter(product => product.sellerTag === 'top rated');
      setuserproducts(topRatedProducts);
    }
    else if (value === "priceLowToHigh") {
      const filteredProducts = userproducts.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
      setuserproducts(sortedProducts);
    }
    else if (value === "priceHighToLow") {
      const filteredProducts = userproducts.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
      setuserproducts(sortedProducts);
    }
    else if (value === "trending" || value === "best seller" || value === "new arrival" || value == "top rated") {
      dropcategories(value, userinput);
    }
    else if (value == "laptop" || value == "ac" || value == "washingMachine" || value == "kitchenappliances" || value == "tablet" || value == "audio" || value == "health" || value == "refrigerator" || value == "travel" || value == "mobile" || value == "tv") {
      navigate(`/${value}`);
    }
    else {
      userbrand(value, userinput.toLowerCase());
    }
  };

  return (
    <>
      <Header />
      <div className="searchcontainer">
        <div className="inputproductheading" >
          <h1>Results for "{userproductheading}"</h1>
        </div>
        <div className="inputdropdowns">
          <div className="inputfirstlist">
            <div className="inputsort-dropdown">

              <select onChange={handleSelectChange}>

                <option value="">Category</option>
                {
                  userdropdownvalues.map((dropcategories) => {
                    return (<option value={dropcategories}>{dropcategories}</option>)

                  }
                  )
                }
              </select>
            </div>
            <div className="inputsort-dropdown">
              <select onChange={handleSelectChange}>
                <option value="">Brand</option>
                {
                  userbrands.map((brandname) => {
                    return (<option value={brandname}>{brandname}</option>)

                  }
                  )
                }
              </select>
            </div>
            <div className="inputsort-dropdown">
              <select onChange={handleSelectChange} >
                <option value="">SellerTag</option>
                {
                  usersellerTag.map((sellername) => {
                    return (<option value={sellername}>{sellername}</option>)
                  }
                  )
                }
              </select>
            </div>
          </div>
          <div className="inputsecondist">
           <select onChange={handleSelectChange} >
              <option value="">Sort By</option>
              <option value="top rated">Top Rated</option>
              <option value="priceLowToHigh">Price (Lowest to Highest)</option>
              <option value="priceHighToLow">Price (Highest to Lowest)</option>
            </select>
          </div>
        </div>
        <div className="userproductscontainer">
          {userproducts &&
            Array.isArray(userproducts) &&
            userproducts.map((user) => {
              return <Dropcard key={user._id} product={user} click={cardclick} />;
            })}
        </div>
      </div>
    </>


  )



}
export default Inputproduct;