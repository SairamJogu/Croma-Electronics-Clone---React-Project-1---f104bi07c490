import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from '../../App';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { updateUserData } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setMessage("")
        e.preventDefault();
        axios
            .post("https://traveller.talrop.works/api/v1/auth/register/",{email, password, name})
            .then((response) => {
                let data = response.data.data;
                let status_code = response.data.StatusCode;
                if (status_code === 6000) {
                    console.log(response.data);
                    localStorage.setItem("user_data", JSON.stringify(data));
                    updateUserData({ type: "LOGIN", payload: data })
                    navigate("/auth/login");
                }else{
                    setMessage(response.data.message)
                }
            }).catch (error =>{
                console.log(error.response);
                if (error.response.status === 401) {
                    setMessage(error.response.data.detail)
                }
            })
    }

    return (
        <>
        <Helmet>
            <title>Signup | Croma</title>
        </Helmet>
            <div className='text-white flex justify-center items-center min-h-screen  pt-6'>
                <div className='bg-slate-900 rounded-lg p-8'>
                    <div className='flex border border-gray-600 rounded-lg items-center justify-between py-1 mb-4'>
                        <Link to='/auth/login'><h2 className='ml-10'>Login</h2></Link>
                        <h3 className='py-1 px-1 border border-gray-600 rounded-lg'>OR</h3>
                        <h2 className='mr-10'>Create Account</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-1'><p>Please enter your Username</p></div>
                        <div>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name} 
                                type="name" placeholder='Enter your Username' 
                                className='border border-gray-600 pr-56 pl-4 py-2 rounded-lg bg-transparent mb-5'/>
                        </div>
                        <div className='mb-1'><p>Please enter your Email ID or Phone number</p></div>
                        <div>
                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email" placeholder='Enter your Email ID' 
                                className='border border-gray-600 pr-56 pl-4 py-2 rounded-lg bg-transparent mb-5'/>
                        </div>
                        <div className='mb-1'><p>Please enter your Password</p></div>
                        <div>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} 
                                type="password" placeholder='Enter your Password' 
                                className='border border-gray-600 pr-56 pl-4 py-2 rounded-lg bg-transparent mb-5'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input type="checkbox" className='h-5 w-5 mr-2' />
                            <small className='font-bold'>Keep me signed in</small>
                        </div>
                        <div className='text-sm my-4'>
                            <p>By continuing you agree to our <a href="/" className='text-teal-500 underline'>Terms of use</a> &<a href="/" className='text-teal-500 underline'>Privacy Policy</a></p>
                        </div>
                        <div>
                            <button className='border border-none rounded-lg bg-teal-500 text-black py-1 px-48'>Sign Up</button>
                        </div>
                        {message && <div className='text-red-500 text-center text-sm mt-3'>{message}</div>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup