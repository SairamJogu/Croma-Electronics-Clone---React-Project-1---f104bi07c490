import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import DropdownTop from '../menubarDropdown/DropdownTop';
import DropdownBottom from '../menubarDropdown/DropdownBottom';

const MenuBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='relative'>
      {isDropdownOpen && (
        <div
          className='fixed inset-0 bg-gray-700 opacity-60'
          onClick={toggleDropdown}
        ></div>
      )}

      <div
        className='flex items-center cursor-pointer relative'
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? (
          <IoMdClose className='text-3xl mr-1' />
        ) : (
          <HiOutlineBars3 className='text-3xl mr-1' />
        )}
        <small>Menu</small>
        <div className='flex flex-col'>
            <DropdownTop isDropdownOpen={isDropdownOpen} />
            <DropdownBottom isDropdownOpen={isDropdownOpen} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;


