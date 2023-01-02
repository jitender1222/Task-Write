

import React from 'react';

import pluss from "../img/plus.png"

const Home = () => {
  return (
    <>
    <nav className='flex justify-between bg-green-500 p-4 text-white'>

        {/* heading name */}
        
        <div className='text-3xl '><span className='cursor-pointer'>Go-task</span></div>

        {/* image */}

        <div>User-img</div>
    </nav>

    {/* form for todo */}

    <div className="bg-green-400 w-[20%] h-[91vh] ">

      <div className='flex flex-col'>

        <div className='flex'>
        <input type="text" placeholder='Create Todo' className='mt-10 ml-5 border-2 border-black p-2 rounded-xl w-[70%]' />

        <div className='w-10 mt-10 ml--2 border-2 rounded-full cursor-pointer'>
        <img src={pluss} alt="" />
        </div>
        </div>

        <div className='mt-10 ml-5 mt-10 ml-5 border-2 border-black p-2 rounded-xl w-[80%] bg-white text-left'>
          <div className='cursor-pointer'>Todo-1</div>
        </div>

        <div className='mt-10 ml-5 mt-10 ml-5 border-2 border-black p-2 rounded-xl w-[80%] bg-white text-left'>
          <div className='cursor-pointer'>Todo-2</div>
        </div>
      </div>

    </div>

    </>
  )
}

export default Home