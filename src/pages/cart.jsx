import React, { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { Link } from "react-router-dom";
import Cartproducts from "./productcart";
import Checkout from "../components/Checkout/checkout";
import "./cart.css";
import Whishlist from "./whislistproduct";


const Cart = () => {
    const [products, setproducts] = useState([]);
    const [whislist, setwhislist] = useState([]);
    const [cartcount, setcartcount] = useState(0);
    const [totalprice, settotalprice] = useState("");

    async function Cartcount() {
        const promise = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
            headers: {
                projectID: "f104bi07c490",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const response = await promise.json();
        setcartcount(response.results);
    }

    const AddCart = async (productID) => {
        const options = {
            method: 'PATCH',
            headers: new Headers({ projectID: 'f104bi07c490', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }),
            quantity: 1,
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
        const resData = await data.json();
        DeleteWhislist(productID);
        setproducts(resData.data.items);
        settotalprice(resData.data.totalPrice);
        Cartcount();
    }

    const AddtoWishlist = async (productId) => {
        console.log("addtowishlist", productId);
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
            method: 'PATCH',
            headers: { 'projectID': 'b0egrjqjnto2', Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId }),
        });
        const resData = await response.json();
        DeleteCart(productId);
        Getwhislist();
        setproducts(resData.data.items);
        settotalprice(resData.data.totalPrice);
    }

    async function Getcart() {
        try {
            const promise = await fetch(
                "https://academics.newtonschool.co/api/v1/ecommerce/cart",
                {
                    headers: {
                        projectID: "f104bi07c490", Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                }
            );
            const response = await promise.json();
            setproducts(response.data?.items);
            settotalprice(response.data?.totalPrice);
        }
        catch (error) {
            console.log(error);
        }
    }

    const DeleteCart = async (productID) => {
        console.log("productID", productID);
        const options = {
            method: 'DELETE',
            headers: new Headers({ projectID: 'f104bi07c490', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`, options)
        const resData = await data.json();
        setproducts(resData.data.items);
        settotalprice(resData.data.totalPrice);
        Cartcount();
    }

    const DeleteWhislist = async (productID) => {
        const options = {
            method: 'DELETE',
            headers: new Headers({ projectID: 'f104bi07c490', 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` })
        }
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productID}`, options)
        const resData = await data.json();
        setwhislist(resData.data.items);
    }
    async function Getwhislist() {
        try {
            const wish = await fetch(
                "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
                {
                    headers: {
                        projectID: "f104bi07c490", Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                }
            );
            const response = await wish.json();
            setwhislist(response.data?.items);
            Cartcount();
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Getcart();
        Getwhislist();
    }, [])

    return (
        <div>
            <Header cartcount={cartcount} />
            {products?.length > 0 ? (
                <div className="prodcart">
                    <div className="prodcartdiv">
                        {products.map((pro) => {
                            return <Cartproducts product={pro} movetowishlist={AddtoWishlist} cardClick={DeleteCart} />
                        })}
                    </div>
                    <Checkout Price={totalprice} />
                </div>
            ) : (
                <div className="emptycart">
                    <h2 >YOUR CART</h2>
                    <div className="image" style={{ textAlign: "center" }}>
                        <img src="https://kind-leakey-f7509c.netlify.app/img/Empty.png" style={{ width: "260px", height: "150px" }} alt="empty-cart" />
                        <h3 style={{ fontWeight: "800" }}> Your Cart is Empty</h3>
                        <Link to="/" style={{ color: "#088466", fontWeight: "800", textDecoration: "underline" }}>continue shopping</Link>
                    </div>
                </div>
            )
            }
            <div className="carwhislistmain" >
                {
                    whislist?.length > 0 ? (
                        <div className="cartwhislistbox">
                            <h2 >YOUR WISHLIST</h2>
                            <div className="carwhislistcontainer">
                                {whislist.map((wish) => {

                                    return <Whishlist wishlistproducts={wish} addtocart={AddCart} deletewish={DeleteWhislist} />
                                })}
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div >
    )
}
export default Cart;