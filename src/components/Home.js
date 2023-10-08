import React from 'react';
import Link from 'next/link';
import { IoArrowDownCircleOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <div className='h-screen relative flex flex-col justify-center items-center text-6xl font-bold shadow-sm'>
        <h2>Ludivine <span className='text-color-light'>CLEMENT</span></h2>
        <h3 className='font-thin mt-6 mb-20 text-5xl'>Créatrice web</h3>
        <div className='absolute left-1/2 translate-x-[-50%] bottom-20 '>
          <Link href="#about" >
            <IoArrowDownCircleOutline className='text-off-white text-5xl animate-bounce' />
          </Link>
        </div>
      </div>
  );
};

export default Home;