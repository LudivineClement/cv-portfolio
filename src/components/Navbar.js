'use client'
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <nav className='w-[100px] bg-color-dark '>
      <ul className='flex flex-col items-center justify-center text-white'>
        {links.map((link, index) => (
          <li
            key={index}
            className={`hover:text-color-light flex flex-col items-center border-r-4  border-b border-b-gray-800 py-3 first:pt-5 w-full ${activeLink === link.section ? ' border-r-color-light' : 'border-r-transparent '}`}
          >
            {link.href ? (
              <a href={link.href} className='group flex flex-col' target='blank'>
                <div className="text-3xl mb-1 mx-auto transition-colors duration-300 group-hover:text-color-light">
                  {link.icon}
                </div>
                <div className={`text-[10px] text-white ${activeLink === link.section ? 'text-color-light' : ''}`}>{link.text}</div>
              </a>
            ) : (
              <ScrollLink
                to={link.section}
                spy={true}
                smooth={false}
                onSetActive={() => handleSetActive(link.section)}
                className={`group flex flex-col cursor-pointer`}
              >
                <div className={`text-3xl mb-1 mx-auto transition-colors duration-300 group-hover:text-color-light ${activeLink === link.section ? 'text-color-light' : ''}`}>
                  {link.icon}
                </div>
                <div className={`text-[10px] text-white ${activeLink === link.section ? 'text-color-light' : ''}`}>{link.text}</div>
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
