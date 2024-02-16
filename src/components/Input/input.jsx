import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import "./input.css";
import { debounce } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Maininput = () => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({ "input": "", });
    const handleInputChange = (e) => {
        e.preventDefault();
        const updatedUserInput = { ...userInput };
        const formData = new FormData(e.currentTarget);
        formData.forEach((value, key) => {
            updatedUserInput[key] = value;
        });
        setUserInput(updatedUserInput);
        if (updatedUserInput.input) {
            navigate(`/search/${updatedUserInput.input}`)
        }
    };

    return (
        <div className="headermaininput">
            <form className="input1" onSubmit={handleInputChange}>
                <input name="input" id="input" type="text" placeholder="What are you looking for ?" className="input-box" />
                <button type="submit" className="searchbutton" ><CiSearch className="CiSearch" /></button>
            </form>
        </div>
    )

}
export default Maininput;