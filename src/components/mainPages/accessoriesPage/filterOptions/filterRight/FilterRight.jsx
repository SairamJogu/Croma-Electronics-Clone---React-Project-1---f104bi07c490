import React, { useState } from 'react';

const Dropdown = () => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Top Rated', 'Price (Lowest First)', 'Price (Highest First)', 'Discount (Descending)', 'Latest Arrival', 'Featured'];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md  bg-slate-700 shadow-sm px-4 py-2 text-sm font-medium text-white-700 focus:outline-none "  aria-haspopup="true" aria-expanded="true">
          Sort By: {selected}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-700 px-3 py-1 cursor-pointer">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button key={index} onClick={() => handleSelect(option)} className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
