import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-[500px] h-full bg-black/40 rounded-xl text-white'>
                 <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, Humburger's Out</p>
                 <p className='px-2'>Through 26/08/2023</p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Orden Now </button>
            </div>
            <img className='max-h-[160px]  w-[500px] md:max-h-[200px] lg:max-h-[300px] object-cover rounded-xl '
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGJ1cmdlciUyMGVnZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="/" />
        </div>

         {/* Card 2 */}
         <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-[500px] h-full bg-black/40 rounded-xl text-white'>
                 <p className='font-bold text-2xl px-2 pt-4 '>New Restaurants</p>
                 <p className='px-2'>Added Daily</p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Orden Now </button>
            </div>
            <img className='max-h-[160px]  w-[500px] md:max-h-[200px] lg:max-h-[300px] object-cover rounded-xl '
            src="https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2QlMjBidXJnZXIlMjBlZ2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="/" />
        </div>

         {/* Card 3*/}
         <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-[500px] h-full bg-black/40 rounded-xl text-white'>
                 <p className='font-bold text-2xl px-2 pt-4 '>We Deliver Disserst Too</p>
                 <p className='px-2'>Tasty Treats!</p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Orden Now </button>
            </div>
            <img className='max-h-[160px]  w-[500px] md:max-h-[200px] lg:max-h-[300px] object-cover rounded-xl '
            src="https://media.istockphoto.com/id/1255426185/photo/delicious-chocolate-zucchini-brownies.webp?b=1&s=170667a&w=0&k=20&c=WZajVWSpzMGwJAOw9bbS5n00N9_28pI83SOrCVMWpkY=" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards