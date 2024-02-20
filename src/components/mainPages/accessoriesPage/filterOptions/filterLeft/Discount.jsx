import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const discountRanges = [
  { id: 1, name: '40% to 60%', count: 292 },
  { id: 2, name: '60% to 80%', count: 201 },
  { id: 3, name: '20% - 40%', count: 115 },
  { id: 4, name: 'Below 20%', count: 113 },
  { id: 5, name: '80% And Above', count: 89 }
];

function DiscountRanges() {
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
          Discount Ranges
        </button>
        <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className='absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
          {discountRanges.map((range) => (
            <div key={range.name} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className='form-checkbox h-5 w-5 checked:bg-teal-500'
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

export default DiscountRanges;