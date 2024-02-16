import React from "react";
import Checkoutheader from "./checkoutheader";
import "./checkoutform.css";
import Checkout from "../components/Checkout/checkout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkoutform = () => {
    const navigate = useNavigate();
    const [totalprice, settotalprice] = useState("");
    const [local, setlocal] = useState({});

    function checkdatalocal() {
        const datainls = JSON.parse(localStorage.getItem('addresses'));
        console.log("dacainls", datainls);
        setlocal(datainls);
    }

    function addnewaddress(e) {
        e.preventDefault();
        if (userAddress.pincode && userAddress.state && userAddress.city && userAddress.fullname && userAddress.landmark && userAddress.area && userAddress.mobileno && userAddress.addresstype && userAddress.street) {
            localStorage.removeItem('addresses');
            setUserAddress({
                pincode: "",
                fullname: "",
                street: "",
                landmark: "",
                area: "",
                city: "",
                state: "",
                mobileno: "",
                addresstype: ""
            })
        }
        else {
            alert("Please fill all the details")
        }
    }
    const [userAddress, setUserAddress] = useState(
        {
            pincode: "",
            fullname: "",
            street: "",
            landmark: "",
            area: "",
            city: "",
            state: "",
            mobileno: "",
            addresstype: ""
        }
    );
    const Getcart = async () => {
        const promise = await fetch(
            "https://academics.newtonschool.co/api/v1/ecommerce/cart",
            {
                headers: {
                    projectID: "f104bi07c490", Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }
        );
        const response = await promise.json();
        settotalprice(response.data.totalPrice);
    }
    useEffect(() => {
        checkdatalocal();
    }, [userAddress])

    useEffect(() => {
        Getcart();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateddata = { ...userAddress };
        updateddata[e.target.name] = e.target.value;
        setUserAddress(updateddata);
    }

    const handleclick = (e) => {
        e.preventDefault();
        const updateddata = { ...userAddress };
        updateddata[e.target.name] = e.target.value;
        setUserAddress(updateddata);
    }
    const handleform = (e) => {
        e.preventDefault();
        const updateddata = { ...userAddress };
        if (userAddress.pincode && userAddress.state && userAddress.city && userAddress.fullname && userAddress.landmark && userAddress.area && userAddress.mobileno && userAddress.addresstype && userAddress.street) {

            localStorage.setItem('addresses', JSON.stringify(userAddress));
            setUserAddress(updateddata);
        }
        if (localStorage.getItem('addresses')) {
            navigate("/payment");
        }
        else {
            alert("Please fill all the details");
        }
    }
    function gottopaymentpage() {
        navigate("/payment");
    }

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Checkoutheader />
            <div style={{ display: "flex", gap: "2rem", backgroundColor: "white" }}>
                <form className="form-container">
                    <h1>Checkout Form</h1>
                    <div className="form-section1">
                        <label htmlFor="name">Name<sup>*</sup></label>
                        <input type="text" value={local?.fullname} id="name" name="fullname" onChange={handleSubmit} required />

                        <label htmlFor="phone">Phone<sup>*</sup></label>
                        <input type="text" value={local?.mobileno} id="phone" name="mobileno" onChange={handleSubmit} required />
                    </div>

                    <h2 style={{ textAlign: "left" }}>Address Details</h2>

                    <div className="form-section2">

                        <label htmlFor="pincode">Pincode<sup>*</sup></label>
                        <input type="text" id="pincode" value={local?.pincode} name="pincode" onChange={handleSubmit} required />

                        <label htmlFor="street">Street<sup>*</sup></label>
                        <input type="text" id="street" value={local?.street} name="street" onChange={handleSubmit} required />

                        <label htmlFor="landmark">Landmark<sup>*</sup></label>
                        <input type="text" id="landmark" value={local?.landmark} name="landmark" onChange={handleSubmit} required />

                        <label htmlFor="area">Section/Area<sup>*</sup></label>
                        <input type="text" id="area" name="area" value={local?.area} onChange={handleSubmit} required />

                        <label htmlFor="state">State<sup>*</sup></label>
                        <input type="text" id="state" name="state" value={local?.state} onChange={handleSubmit} required />

                        <label htmlFor="city">City<sup>*</sup></label>
                        <input type="text" id="city" name="city" value={local?.city} onChange={handleSubmit} required />
                    </div>
                    <label htmlFor="street" >Address Type</label>
                    <div className="form-btns">
                        <button className="" name="addresstype" onClick={handleclick} value="Home">Home</button>
                        <button className="" name="addresstype" onClick={handleclick} value="Work">Work</button>
                        <button className="" name="addresstype" onClick={handleclick} value="Other">Other</button>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                        <button className="" style={{ width: "150px", border: "2px solid #12daa8" }} type="submit" onClick={handleform}>Go to Payment</button>
                        <button className="" style={{ width: "150px", border: "2px solid #12daa8" }} onClick={addnewaddress}>Add New Address</button>
                    </div>
                </form>
                <Checkout Price={totalprice} paymentclick={gottopaymentpage} />
            </div>
        </div>
    )

}
export default Checkoutform;