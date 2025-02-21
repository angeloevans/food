import React, { useState } from 'react';
import { data } from '../data/data';

const Food = ({ searchTerm }) => {
  const [foods, setFoods] = useState(data);
  const [priceFilterMessage, setPriceFilterMessage] = useState('');

  // Filter by Type
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
    setPriceFilterMessage(''); // Reset the message when changing type filter
  };

  // Filter by Price (Under Construction)
  const filterPrice = (price) => {
    setPriceFilterMessage('This feature is under construction!');
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Menus</h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between mt-6">
        {/* Filter by Type */}
        <div>
          <p className="font-bold text-gray-700 mb-2">Filter Type</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFoods(data)} className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
              All
            </button>
            <button onClick={() => filterType('burger')} className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
              Burger
            </button>
            <button onClick={() => filterType('pizza')} className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
              Pizza
            </button>
            <button onClick={() => filterType('chicken')} className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
              Chicken
            </button>
            <button onClick={() => filterType('salad')} className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md">
              Salads
            </button>
          </div>
        </div>

        {/* Filter by Price */}
        <div className="mt-4 lg:mt-0">
          <p className="font-bold text-gray-700 mb-2">Filter Price</p>
          <div className="flex gap-2">
            <button
              onClick={() => filterPrice('€')}
              className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md"
            >
              €
            </button>
            <button
              onClick={() => filterPrice('€€')}
              className="px-3 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md"
            >
              €€
            </button>
          </div>
        </div>
      </div>

      {/* Show "Under Construction" Message */}
      {priceFilterMessage && (
        <div className="text-center text-red-500 mt-4">{priceFilterMessage}</div>
      )}

      {/* Display Food Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {foods
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm) // ✅ Filter by search term
          )
          .map((item, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.name} className="w-full h-[180px] object-cover rounded-t-lg" />
              <div className="flex justify-between px-4 py-3">
                <p className="font-bold">{item.name}</p>
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full">{item.price}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Food;
