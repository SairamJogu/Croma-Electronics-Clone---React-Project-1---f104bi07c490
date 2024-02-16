import React from "react";
import { useParams, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react";
import { GET_PRODUCTS_CATEGORYWISE } from "../components/Constants/Api";
import Header from "../components/Header/header";
import "./productcontainer.css";
import Dropcard from "../components/Card/dropcard";

function ProductContainer() {
  const navigate = useNavigate();
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [dropdownvalues, setdropdown] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sellerTag, setSellerTag] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  async function alldropdowncategories() {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories`, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      const jsonData = await response.json();
      setdropdown(jsonData.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async function brand(value) {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"brand":"${value}","subCategory":"${productCategory}"}`, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      const jsonData = await response.json();
      setProducts(jsonData.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getAllProductsCategoryWise(category) {
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
      setProducts(jsonData.data);
      setBrands(updatedBrand);
      setSellerTag(sellerproductnames);
    } catch (error) {
      console.log("error", error)
    }
  }

  async function dropcategories(value, productCategory) {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"sellerTag":"${value}","subCategory":"${productCategory}"}`, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      const jsonData = await response.json();
      setProducts(jsonData.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProductsCategoryWise(productCategory);
    alldropdowncategories();
    window.scrollTo(0, 0);
  }, [productCategory]);

  const cardclick = (_id) => {
    navigate(`/details/${_id}`)
  }

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "priceLowToHigh") {
      const filteredProducts = products.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    else if (value === "priceHighToLow") {
      const filteredProducts = products.filter(product => product.price > 0);
      const sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    else if (value === "trending" || value === "best seller" || value === "new arrival" || value == "top rated") {
      dropcategories(value, productCategory)
    }
    else if (value == "laptop" || value == "ac" || value == "washingMachine" || value == "kitchenappliances" || value == "tablet" || value == "audio" || value == "health" || value == "refrigerator" || value == "travel" || value == "mobile" || value == "tv") {
      navigate(`/${value}`);
    }
    else {
      brand(value);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="containerheading" >
          <h1>{productCategory}</h1>
        </div>
        <div className="dropdowns">
          <div className="firstlist">
            <div className="firstlistsort-dropdown">
              <select onChange={handleSelectChange}>
            <option value="">Category</option>
                {
                  dropdownvalues.map((dropcategories) => {
                    return (<option value={dropcategories}>{dropcategories}</option>)
                  }
                  )
                }
              </select>
            </div>
            <div className="firstlistsort-dropdown">
              <select onChange={handleSelectChange}>
                <option value="">Brand</option>
                {
                  brands.map((brandname) => {
                    return (<option value={brandname}>{brandname}</option>)
                  }
                  )
                }
              </select>
            </div>
            <div className="firstlistsort-dropdown">
              <select onChange={handleSelectChange} >
                <option value="">SellerTag</option>
                {
                  sellerTag.map((sellername) => {
                    return (<option value={sellername}>{sellername}</option>)
                  }
                 )
                }
              </select>
            </div>
          </div>
          <div className="secondlist">
            <select onChange={handleSelectChange} >
              <option value="">Sort By</option>
              <option value="top rated">Top Rated</option>
              <option value="priceLowToHigh">Price (Lowest to Highest)</option>
              <option value="priceHighToLow">Price (Highest to Lowest)</option>
            </select>
          </div>
        </div>
        <div className="producContainer2">
          {products.length > 0 &&
            Array.isArray(products) &&
            products.map((product) => {
              return <Dropcard key={product._id} product={product} click={cardclick} />;
            })
          }
        </div>
      </div>
    </div>
  );
}
export default ProductContainer;
