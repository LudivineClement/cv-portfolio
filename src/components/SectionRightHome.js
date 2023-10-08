import React from 'react';
import About from './About';
import Link from 'next/link';
import { CgMouse } from 'react-icons/cg';
import Formation from './Formation';

const SectionRightHome = () => {
  return (
    <div className="absolute right-0 w-2/3" id='home'>
      <div className='h-screen relative flex flex-col justify-center items-center text-6xl font-bold shadow-sm'>
        <p>Ludivine <span className='text-color-light'>CLEMENT</span></p>
        <p className='font-thin mt-6 mb-20 text-5xl'>Créatrice web</p>
        <div className='absolute left-1/2 translate-x-[-50%] bottom-20 '>
          <Link href="#about" >
            <CgMouse className='text-off-white text-5xl animate-bounce' />
          </Link>
        </div>
      </div>
      <About />
      <Formation />

    </div>
  );
};

export default SectionRightHome;