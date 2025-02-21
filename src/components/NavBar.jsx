import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

const NavBar = ({ setSearchTerm }) => {
  const [priceFilterMessage, setPriceFilterMessage] = useState('');

  // Handle Cart Button click
  const handleCartClick = () => {
    setPriceFilterMessage('Cart feature is under construction!');
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Food</span>
        </h1>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search food..."
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} // Update search term
        />
      </div>

      {/* Cart Button */}
      <div className="relative">
        <button
          onClick={handleCartClick} // Trigger "Under Construction" message on Cart click
          className="bg-black text-white hidden md:flex items-center px-4 py-2 rounded-lg hover:bg-gray-900"
        >
          <BsFillCartFill size={20} className="mr-2" />
          Cart
        </button>

        {/* Show "Under Construction" Message */}
        {priceFilterMessage && (
          <div className="text-center text-red-500 mt-2">{priceFilterMessage}</div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
