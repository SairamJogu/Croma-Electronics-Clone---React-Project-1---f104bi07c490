import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const brands = [
  { id: 1, name: 'Spigen', count: 221 },
  { id: 2, name: 'Samsung', count: 173 },
  { id: 3, name: 'Apple', count: 157 },
  { id: 4, name: 'Arrow', count: 56 },
  { id: 5, name: 'Esse', count: 18 },
  { id: 6, name: 'Croma', count: 9 },
  { id: 7, name: 'Case-Mate', count: 9 },
  { id: 8, name: 'Uniq', count: 6 },
  { id: 9, name: 'OnePlus', count: 3 },
  { id: 10, name: 'Amzer', count: 2 }
];

function Brands() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const removeBrand = (brand) => {
    setSelectedBrands((prev) => prev.filter((b) => b !== brand));
  };

  return (
    <div className='relative'>
      <div className='flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer'>
        <button className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`} onClick={toggleDropdown}>
          Brands
        </button>
        <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className='absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
          {brands.map((brand) => (
            <div key={brand.name} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className='form-checkbox h-5 w-5 checked:bg-teal-500'
                checked={selectedBrands.includes(brand.name)}
                onChange={() => handleBrandChange(brand.name)}
              />
              <span className="ml-2 flex whitespace-nowrap uppercase">
                {`${brand.name} (${brand.count})`}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='flex flex-wrap mt-2'>
        {selectedBrands.map((brand) => (
          <div key={brand} className='flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1'>
            <span>{brand}</span>
            <RiCloseCircleLine className='ml-2 cursor-pointer' onClick={() => removeBrand(brand)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;