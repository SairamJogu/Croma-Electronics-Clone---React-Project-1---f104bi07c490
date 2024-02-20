import React from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import Location from './Location';
import User from './User';
import Carticon from './Carticon';


function Navbar() {
    return (
        <div className='bg-black text-white sticky top-0 z-50'>
            <div className='wrapper flex justify-between p-5 items-center'>
                <div className='flex items-center'>
                    <Logo />
                    <div className='ml-10'>
                        <MenuBar />
                    </div>
                </div>
                <SearchBar />
                <div className='flex items-center'>
                    <div className='mr-7'>
                        <Location />
                    </div>
                    <div className='mr-7'>
                        <User />
                    </div>
                    <Carticon />
                </div>
            </div>
        </div>
    )
}

export default Navbar