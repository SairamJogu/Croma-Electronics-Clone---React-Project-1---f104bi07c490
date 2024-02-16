import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./orderhistory.css";
import OrderHistoryComponent from "../Order-History/order";
import Header from "../../../components/Header/header";

function Orderhistorycontainer() {

    const [orderData, setOrderData] = useState([]);
    const navigate = useNavigate();

    async function getOrderData() {
        try {
            let result = await fetch(
                `https://academics.newtonschool.co/api/v1/ecommerce/order/`,
                {
                    method: "GET",
                    headers: {
                        projectID: "b0egrjqjnto2", Authorization: `Bearer ${localStorage.getItem('token')}`, "Content-Type": "application/json",
                    }

                }
            );
            let resultResponse = await result.json();


            if (resultResponse.status === "success") {
                  setOrderData(resultResponse.data);
                console.log('orderData', resultResponse.data);
            }
        } catch {
            console.log("errorrrrrrrrrrrr");
            //navigate("/");
        }
    }

    useEffect(() => {
        getOrderData();
        window.scrollTo(0, 0);
    }, []);




    return (
        <>
        <Header/>
            <div className="orderHistoryContainer">
                <div className="orderHistoryText">Order History</div>
                {orderData.length > 0 ? (
                    orderData.reverse().map((val) => {
                        return <OrderHistoryComponent data={val} key={val.order._id} />;
                    })
                ) : (
                    <div className="notorderedimage">
                        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg" alt="order-cart" />
                        <h3>No Order History Available</h3>
                        <Link to="/" style={{ color: "#088466", fontWeight: "800", textDecoration: "underline" }}>continue shopping</Link>
                    </div>
                )}
            </div>
        </>
    );
}
export default Orderhistorycontainer;