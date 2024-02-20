import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineStar, HiOutlineGift, HiChevronRight } from 'react-icons/hi';
import { PiStorefrontLight } from "react-icons/pi";

const DropdownTop = ({ isDropdownOpen }) => {
  const menuItems = [
    { name: 'Exclusive At Croma', icon: <HiOutlineStar /> },
    { name: 'Top Brands', icon: <HiChevronRight /> },
    { name: 'Croma Store Locator', icon: <PiStorefrontLight /> },
    { name: 'Gift Card', icon: <HiOutlineGift /> },
  ];

  return (
    <>
      {isDropdownOpen && (
        <div className='absolute top-10 -right-32  bg-stone-700 border-r-4 border-teal-500 z-10 '>
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center hover:bg-teal-500 pl-2">
              <div className='text-2xl'>
                {item.icon}
              </div>
              <div className='text-white pr-44 pl-5 py-4 whitespace-nowrap'>
                <Link to='/'>{item.name}</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownTop;
