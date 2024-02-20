import React, { useState, useContext } from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa6";
import { Cart } from '../context/Context'

const DropdownUser = () => {
    const { userData, updateUserData } = useContext(Cart);
    const handleLogout = () => {
        updateUserData({ type: "LOGOUT" });
    };
    
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        setDropdownOpen(false);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative z-50">
            <div className="text-2xl cursor-pointer" onClick={handleDropdownToggle}>
                <FaUser />
            </div>
            {isDropdownOpen && (
                <div className="absolute -right-4 mt-2 w-60 rounded-md shadow-lg bg-slate-700 text-white">
                <div className="py-1">
                    <div className= 'pl-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <FaRegUserCircle />
                            </div>
                            <div>
                                <Link to="/" onClick={() => handleOptionClick('My Profile')}>
                                    <h3 className='font-bold'>My Profile</h3>
                                </Link>
                                <small classname='text-xs'>Edit your Basic Details</small>
                            </div>
                        </div>
                    </div>
                    <div className= 'px-4  py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <PiAddressBookFill />
                            </div>
                            <div>
                                <Link to="accessories" onClick={() => handleOptionClick('My Address')}>
                                    <h3 className='font-bold'>My Address</h3>
                                </Link>
                                <small classname='text-xs'>Manage your saved addresses</small>
                            </div>
                        </div>
                    </div>
                    <div className= 'pl-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <BsFillBoxSeamFill />
                            </div>
                            <div>
                                <Link to="/" onClick={() => handleOptionClick('My Order')}>
                                    <h3 className='font-bold'>My Order</h3>
                                </Link>
                                <small classname='text-xs'>View, track, cancel orders and buy again </small>
                            </div>
                        </div>
                    </div>
                    <div className= 'px-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <SlBadge />
                            </div>
                            <div>
                                <Link to="/" onClick={() => handleOptionClick('My Privilege Offers')}>
                                    <h3 className='font-bold'>My Privilege Offers</h3>
                                </Link>
                                <small classname='text-xs'>Exclusive Offers for you</small>
                            </div>
                        </div>
                    </div>
                    <div className= 'px-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <FaRegHeart />
                            </div>
                            <div>
                                <Link to="/" onClick={() => handleOptionClick('My Wishlist')}>
                                    <h3 className='font-bold'>My Wishlist</h3>
                                </Link>
                                <small classname='text-xs'>Have a look at your favourite products</small>
                            </div>
                        </div>
                    </div>
                    <div className= 'px-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <MdDevices />
                            </div>
                            <div>
                                <Link to="/" onClick={() => handleOptionClick('My Devices & Plans')}>
                                    <h3 className='font-bold'>My Devices & Plans</h3>
                                </Link>
                                <small classname='text-xs'>Manage your devices and plans</small>
                            </div>
                        </div>
                    </div>
                    <div className= 'px-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <BiMessageDetail />
                            </div>
                            <div>
                                <Link to="/" onClick={() => handleOptionClick('My Service Requests')}>
                                    <h3 className='font-bold'>My Service Requests</h3>
                                </Link>
                                <small classname='text-xs'>Manage complaints, feedback, service requests</small>
                            </div>
                        </div>
                    </div>
                    <div className= 'px-4 py-2 text-white'>
                        <div className='flex items-center'>
                            <div className='mr-5 text-2xl'>
                                <FaPowerOff />
                            </div>
                            <div onClick={() => handleOptionClick('Login')}>                                
                                {userData ? (
                                    <Link><h3 onClick={() => handleLogout()} className='font-bold'>Logout</h3></Link>
                                ) :(
                                    <Link to="/auth/login"><h3 className='font-bold'>Login</h3></Link>                                    
                                )}                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};

export default DropdownUser;