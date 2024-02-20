import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from '../../App';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { updateUserData } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setMessage("")
        e.preventDefault();
        axios
            .post("https://traveller.talrop.works/api/v1/auth/token/",{username, password})
            .then((response) => {
                console.log(response.data);
                let data = response.data;
                localStorage.setItem("user_data", JSON.stringify(data));
                updateUserData({ type: "LOGIN", payload: data })
                navigate("/");
            }).catch (error =>{
                console.log(error.response.status);
                if (error.response.status === 401) {
                    setMessage(error.response.data.detail)
                }
            })
    }

    return (
        <>
        <Helmet>
            <title>Login | Croma</title>
        </Helmet>
            <div className='text-white flex justify-center items-center min-h-screen  pt-6'>
                <div className='bg-slate-900 rounded-lg p-8'>
                    <div className='flex border border-gray-600 rounded-lg items-center justify-between py-1 mb-4'>
                        <h2 className='ml-10'>Login</h2>
                        <h3 className='py-1 px-1 border border-gray-600 rounded-lg'>OR</h3>
                        <Link to='/auth/create'><h2 className='mr-10'>Create Account</h2></Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-1'><p>Enter your Email ID or Phone number</p></div>
                        <div>
                            <input 
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}  
                                type="email" placeholder='Enter your Email ID' 
                                className='border border-gray-600 pr-56 pl-4 py-2 rounded-lg bg-transparent mb-5'/>
                        </div>
                        <div className='mb-1'><p>Enter your Password</p></div>
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
                            <button className='border border-none rounded-lg bg-teal-500 text-black py-1 px-48'>Sign In</button>
                        </div>
                        {message && <div className='text-red-500 text-center text-sm mt-3'>{message}</div>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login