import React from "react";
import { useState } from "react";

import "./register.css";

import Header from "../components/Header/header";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [user, setuser] = useState(false);
    const [message, setMessage] = useState("");

    async function userLogin(userData) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
                method: 'POST',
                headers: { 'projectID': 'b0egrjqjnto2', "Content-Type": "application/json", },
                body: JSON.stringify(userData),
            });
            const jsonData = await response.json();
            if (jsonData.status === "success") {
                localStorage.setItem('token', jsonData.token);
                delete jsonData['token'];
                navigate("/");
                console.log(jsonData);
            }
            else {
                setuser(true);
                setMessage(jsonData.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const [loginData, setLoginData] = useState({
        name: "",
        email: "",
        password: "",
        appType: "ecommerce"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateddata = { ...loginData };
        updateddata[e.target.name] = e.target.value;
        setLoginData(updateddata);
    }

    const signedin = () => {
        if (loginData.email && loginData.password && loginData.name)
            userLogin(loginData);

    }
    return (
        <div>
            <Header />
            <div className="mainusersignup">
                <div className="signup">
                    <p className="signupcreatetext">Create New Account</p>
                    <div className="details">
                        <input type="text" name="name" className="input"placeholder="Enter your Name"onChange={handleSubmit} required/>
                        <input type="email" name="email" className="input" placeholder="Enter your Email ID" onChange={handleSubmit} required />
                        <input type="password" name="password" className="input" placeholder="Enter your password" onChange={handleSubmit} required/>
                    </div>
                    <div className="signupmainbutton">
                        <button style={{ marginTop: "1rem" }} onClick={signedin}>Signup</button>
                    </div>
                    {
                        message ? <h4 style={{ color: "Red", textAlign: "center" }}>{message}</h4> : ""

                    }
                    <p className="new-user">Already Registered? <Link to="/login" style={{ color: "#12daa8" }}>Login</Link></p>
                </div>
            </div>
        </div>
    )


}
export default Register;