/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { TbBrandGithub } from 'react-icons/tb';
import { LiaLinkedinIn } from 'react-icons/lia';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

import Navbar from './Navbar';

const SectionImgHome = () => {
  return (
    <div className=" flex w-1/3 text-center h-screen overflow-hidden fixed left-0 ">
      <Navbar />
      <div className=" w-5/6 px-3 text-white flex flex-col justify-center bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400">
        <div className='relative'>
          <img src="/img/Avatar-Maker.png" alt="avatar" className="h-40 inline-block mx-auto mb-10 transition-transform duration-300 hover:scale-105 after:content-[''] after:absolute after:opacity-50 after:top-[10%] after:left-[7%] after:h-full after:w-full after:rounded-[300px] after:bg-6px after:-z-10 after:bg-repeating-radial-gradient after:bg-repeat" />
        </div>
        <h1 className='text-4xl leading-none font-extrabold'>
          Ludivine Clément
          <span className="text-lg inline-block font-light mt-3 mb-6">Développeuse Web Front-end</span>
        </h1>
        <div className='mx-auto flex gap-3'>
          <Link href="#"><TbBrandGithub className='p-1 text-3xl transition-all duration-300  border-white hover:border-color-light border-solid border-[1px] rounded-full hover:text-color-light hover:scale-110' /></Link>
          <Link href="#"><LiaLinkedinIn className='p-1 text-3xl transition-all duration-300 border-white hover:border-color-light border-solid border-[1px] rounded-full hover:text-color-light hover:scale-110' /></Link>
          <Link href="#"><FaXTwitter className='p-1 text-3xl transition-all duration-300 border-white hover:border-color-light border-solid border-[1px] rounded-full hover:text-color-light hover:scale-110' /></Link>
        </div>

        <button className="text-sm text-white px-4 py-3 shadow-xl transition-all duration-300 ease-in group uppercase max-w-[250px] mx-auto mt-20 tracking-widest will-change-transform rounded-full bg-color-dark border-2 border-transparent hover:bg-white hover:text-color-purple hover:border-2 hover:scale-105 hover:border-color-purple">Télécharger le cv <BiDownload className='inline-block text-2xl mb-1 ml-1 text-color-dark bg-white group-hover:text-white group-hover:bg-color-purple rounded-full p-1' /> </button>
      </div>
    </div>
  );
};

export default SectionImgHome;