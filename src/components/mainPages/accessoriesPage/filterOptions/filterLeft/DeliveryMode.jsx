import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const deliveryModes = [
  { id: 1, name: 'Express Delivery', count: 221 },
  { id: 2, name: 'Home Delivery', count: 173 }
];

function DeliveryModes() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedModes, setSelectedModes] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleModeChange = (mode) => {
    setSelectedModes((prev) =>
      prev.includes(mode)
        ? prev.filter((m) => m !== mode)
        : [...prev, mode]
    );
  };

  const removeMode = (mode) => {
    setSelectedModes((prev) => prev.filter((m) => m !== mode));
  };

  return (
    <div className='relative'>
      <div className='flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer'>
        <button className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`} onClick={toggleDropdown}>
          Delivery Modes
        </button>
        <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className='absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
          {deliveryModes.map((mode) => (
            <div key={mode.name} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className='form-checkbox h-5 w-5 checked:bg-teal-500'
                checked={selectedModes.includes(mode.name)}
                onChange={() => handleModeChange(mode.name)}
              />
              <span className="ml-2 flex whitespace-nowrap uppercase">
                {`${mode.name} (${mode.count})`}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='flex flex-wrap mt-2'>
        {selectedModes.map((mode) => (
          <div key={mode} className='flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1'>
            <span>{mode}</span>
            <RiCloseCircleLine className='ml-2 cursor-pointer' onClick={() => removeMode(mode)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryModes;
