import React from 'react';
import About from './About';
import Link from 'next/link';
import Formation from './Formation';

const SectionRightHome = () => {
  return (
    <div className="absolute right-0 w-2/3" id='home'>
      <div className='h-screen relative flex flex-col justify-center items-center text-6xl font-bold shadow-sm'>
        <h2>Ludivine <span className='text-color-light'>CLEMENT</span></h2>
        <h3 className='font-thin mt-6 mb-20 text-5xl'>Créatrice web</h3>
        <div className='absolute left-1/2 translate-x-[-50%] bottom-20 '>
          <Link href="#about" >
            <div className="relative border-[3px] border-color-light rounded-[50px] h-[63px] w-[30px] before:absolute before:content-[''] before:h-1 before:w-[5px] before:bg-color-light before:rounded-[57%] before:left-[40%] before:-translate-y-2/4 before:animate-animationMouse"></div>
          </Link>
        </div>
      </div>
      <About />
      <Formation />
    </div>
  );
};

export default SectionRightHome;