import React from 'react';

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white flex flex-col justify-between p-4">
          <div>
            <p className="font-bold text-2xl">Sun's Out, Burger's Out</p>
            <p>Through 26/08/2023</p>
          </div>
          <button className="border border-white bg-white text-black px-4 py-2 rounded-lg self-start">
            Order Now
          </button>
        </div>
        <img
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGJ1cmdlciUyMGVnZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="Burger"
        />
      </div>

      {/* Card 2 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white flex flex-col justify-between p-4">
          <div>
            <p className="font-bold text-2xl">New Restaurants</p>
            <p>Added Daily</p>
          </div>
          <button className="border border-white bg-white text-black px-4 py-2 rounded-lg self-start">
            Order Now
          </button>
        </div>
        <img
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2QlMjBidXJnZXIlMjBlZ2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
          alt="Restaurant"
        />
      </div>

      {/* Card 3 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white flex flex-col justify-between p-4">
          <div>
            <p className="font-bold text-2xl">We Deliver Desserts Too</p>
            <p>Tasty Treats!</p>
          </div>
          <button className="border border-white bg-white text-black px-4 py-2 rounded-lg self-start">
            Order Now
          </button>
        </div>
        <img
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1255426185/photo/delicious-chocolate-zucchini-brownies.webp?b=1&s=170667a&w=0&k=20&c=WZajVWSpzMGwJAOw9bbS5n00N9_28pI83SOrCVMWpkY="
          alt="Dessert"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
