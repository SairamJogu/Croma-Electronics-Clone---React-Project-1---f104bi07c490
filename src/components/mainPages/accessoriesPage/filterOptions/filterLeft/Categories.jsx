// import React, { useState } from 'react';
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const categories = [
//     { id: 1, name: 'Mobile Cases & Covers', count: 1080 },
//     { id: 2, name: 'Truly Wireless Earbuds', count: 714 },
//     { id: 3, name: 'USB Cables & Connectors', count: 241 },
//     { id: 4, name: 'Laptop Accessories', count: 190 },
//     { id: 5, name: 'Bluetooth Headphones', count: 170},
//     { id: 6, name: 'Earphones', count: 170},
//     { id: 7, name: 'KeyBoards', count: 102},
//     { id: 8, name: 'Memory Cards', count: 68},
//     { id: 9, name: 'Headphones', count: 66},
//     { id: 10, name: 'Mobile Accessories', count: 55}
// ];

// function Categories() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   const removeCategory = (category) => {
//     setSelectedCategories((prev) => prev.filter((c) => c !== category));
//   };

//   return (
//     <div className='relative'>
//       <div className='flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer w-fit'>
//         <button className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`} onClick={toggleDropdown}>
//           Categories
//         </button>
//         <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
//       </div>
//       {isDropdownOpen && (
//         <div className='absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
//           {categories.map((category) => (
//             <div key={category.name} className="mb-2 flex items-center">
//               <input
//                 type="checkbox"
//                 className='h-5 w-5 checked:bg-teal-500'
//                 checked={selectedCategories.includes(category.name)}
//                 onChange={() => handleCategoryChange(category.name)}
//               />
//               <span className="ml-2 flex whitespace-nowrap uppercase">
//                 {`${category.name} (${category.count})`}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className='flex flex-wrap mt-2'>
//         {selectedCategories.map((category) => (
//           <div key={category} className='flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1'>
//             <span>{category}</span>
//             <RiCloseCircleLine className='ml-2 cursor-pointer' onClick={() => removeCategory(category)} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { RiArrowDropDownLine, RiCloseCircleLine } from 'react-icons/ri';

// ... (same as before)
const categories = [
    { id: 1, name: 'Mobile Cases & Covers', count: 1080 },
    { id: 2, name: 'Truly Wireless Earbuds', count: 714 },
    { id: 3, name: 'USB Cables & Connectors', count: 241 },
    { id: 4, name: 'Laptop Accessories', count: 190 },
    { id: 5, name: 'Bluetooth Headphones', count: 170},
    { id: 6, name: 'Earphones', count: 170},
    { id: 7, name: 'KeyBoards', count: 102},
    { id: 8, name: 'Memory Cards', count: 68},
    { id: 9, name: 'Headphones', count: 66},
    { id: 10, name: 'Mobile Accessories', count: 55}
];
function Categories() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const history = useNavigate(); // Initialize useHistory

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  const applyFilters = () => {
    // Redirect to the ProductsPage with selected categories as query parameters
    history(`/products?categories=${selectedCategories.join(',')}`);
  };

  return (
    <div className="relative">
      <div className="flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer w-fit">
        <button
          className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`}
          onClick={toggleDropdown}
        >
          Categories
        </button>
        <RiArrowDropDownLine className="text-xl" onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className="absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 checked:bg-teal-500"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
              />
              <span className="ml-2 flex whitespace-nowrap uppercase">
                {`${category.name} (${category.count})`}
              </span>
            </div>
          ))}
          <button
            className="mt-2 bg-teal-500 text-white px-3 py-1 rounded-full"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      )}
      <div className="flex flex-wrap mt-2">
        {selectedCategories.map((category) => (
          <div key={category} className="flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1">
            <span>{category}</span>
            <RiCloseCircleLine
              className="ml-2 cursor-pointer"
              onClick={() => removeCategory(category)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
