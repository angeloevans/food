import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="relative max-h-[500px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 sm:p-10 text-gray-200">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
            Foods <span className="text-orange-600">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full h-[500px] md:h-[550px] object-cover"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Food Background"
        />
      </div>
    </div>
  );
};

export default Hero;
