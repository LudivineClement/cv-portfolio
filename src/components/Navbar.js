import React from 'react';
import Link from 'next/link';
import { BiSolidHome } from 'react-icons/bi';
import { HiMiniUser, HiEnvelope, HiWrenchScrewdriver } from 'react-icons/hi2';
import { FaGraduationCap } from 'react-icons/fa6';
import { GiSuitcase } from 'react-icons/gi';
import { TfiGallery } from 'react-icons/tfi';

const links = [
  { text: 'Accueil', section: 'home', icon: <BiSolidHome /> },
  { text: 'A propos', section: 'about', icon: <HiMiniUser /> },
  { text: 'Formation', section: 'formation', icon: <FaGraduationCap /> },
  { text: 'Compétences', section: 'skills', icon: <HiWrenchScrewdriver /> },
  { text: 'Expérience', section: 'experience', icon: <GiSuitcase /> },
  { text: 'Portfolio', href: 'https://ludivine-clement.dev', icon: <TfiGallery /> },
  { text: 'Contact', section: 'contact', icon: <HiEnvelope /> },
];

const Navbar = () => {
  return (
    <nav className='w-[100px] bg-color-dark '>
      <ul className='flex flex-col items-center justify-center gap-y-4 py-5 text-white'>
        {links.map((link, index) => (
          <li
            key={index}
            className='hover:text-color-light flex flex-col items-center border-b border-gray-800 pb-5 w-full last:border-none'
          >
            {link.href ? (
              <Link href={link.href} className='group flex flex-col' target='blank'>
                <div className="text-3xl mb-1 mx-auto transition-colors duration-300 group-hover:text-color-light">
                  {link.icon}
                </div>
                <div className='text-[10px] text-white '>{link.text}</div>
              </Link>
            ) : (
              <Link href={`#${link.section}`} className='group flex flex-col'>
                <div className="text-3xl mb-1 mx-auto transition-colors duration-300 group-hover:text-color-light">
                  {link.icon}
                </div>
                <div className='text-[10px] text-white '>{link.text}</div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

