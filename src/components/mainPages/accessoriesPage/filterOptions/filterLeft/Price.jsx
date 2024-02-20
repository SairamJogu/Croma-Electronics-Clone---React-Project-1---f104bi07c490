import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const priceRanges = [
  { id: 1, name: '5,001 - 10,000', count: 41 },
  { id: 2, name: '1,501 - 3,000', count: 280 },
  { id: 3, name: '501 - 1,000', count: 296 },
  { id: 4, name: '3,001 - 5,000', count: 185 },
  { id: 5, name: '1,001 - 1,500', count: 104 },
  { id: 6, name: '500 & Below', count: 225 }
];

function PriceRanges() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRanges, setSelectedRanges] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleRangeChange = (range) => {
    setSelectedRanges((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
  };

  const removeRange = (range) => {
    setSelectedRanges((prev) => prev.filter((r) => r !== range));
  };

  return (
    <div className='relative'>
      <div className='flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer'>
        <button className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`} onClick={toggleDropdown}>
          Price
        </button>
        <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className='absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
          {priceRanges.map((range) => (
            <div key={range.name} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className='h-5 w-5 checked:bg-teal-500'
                checked={selectedRanges.includes(range.name)}
                onChange={() => handleRangeChange(range.name)}
              />
              <span className="ml-2 flex whitespace-nowrap uppercase">
                {`${range.name} (${range.count})`}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='flex flex-wrap mt-2'>
        {selectedRanges.map((range) => (
          <div key={range} className='flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1'>
            <span>{range}</span>
            <RiCloseCircleLine className='ml-2 cursor-pointer' onClick={() => removeRange(range)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceRanges;
