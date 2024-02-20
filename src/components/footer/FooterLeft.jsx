import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn, FaSquareXTwitter  } from "react-icons/fa6";

function FooterLeft() {
    return (
        <div className=' text-white'>
                <h3>CONNECT WITH US</h3>
                <div className='flex items-center bg-white mb-10 max-w-md px-2 py-3 rounded-md'>
                    <input type="text" placeholder="Enter Email ID" className='w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black' />
                    <FaArrowRightLong className='text-black ' />
                </div>
                <div className='flex text-4xl p-1 cursor-pointer mb-10'>
                    <BsYoutube className='mr-4 hover:text-red-400'/>
                    <LiaFacebookF className='mr-4 hover:text-blue-500'/>
                    <FaInstagramSquare className='mr-4 hover:text-rose-600'/>
                    <FaLinkedinIn className='mr-4 hover:text-blue-300'/>
                    <FaSquareXTwitter />
                </div>
                <div className=''>
                    <p>© Copyright 2024 Croma.All rights <br />reserved</p>
                </div>
        </div>
    )
}

export default FooterLeft