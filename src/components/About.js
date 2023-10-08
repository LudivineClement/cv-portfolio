/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Heading from './Heading';
import { MdCake } from 'react-icons/md';
import { IoIosPaperPlane, IoIosSpeedometer } from 'react-icons/io';
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { TbFlagFilled, TbSeo } from 'react-icons/tb';
import { BsCodeSlash, BsSearchHeart } from 'react-icons/bs';
import { MdScreenRotation } from 'react-icons/md';

const About = () => {
  return (
    <section id='about' className='py-20 pl-16 pr-8 shadow-sm'>
      <Heading title="Qui suis-je ?" />
      <div className='flex gap-14 mb-20'>
        <div className='w-1/2'>Je m&#39;appelle Ludivine, et je suis constamment animée par une insatiable curiosité qui m&#39;amène à explorer divers domaines technologiques. Cependant, ne vous y trompez pas, je ne suis pas enfermée derrière un écran d&#39;ordinateur, bien que cela soit souvent ma source d&#39;inspiration principale ! Ce qui me passionne avant tout, ce sont les individus passionnés, tout comme moi, qui aiment partager leurs connaissances.</div>

        <ul className='w-1/2'>
          <li className='flex mb-4'><MdCake className='text-xl text-color-light mr-4' /> 11/09/1985</li>
          <li className='flex mb-4'><IoIosPaperPlane className='text-xl text-color-light mr-4' /> <a href="mailto:ludivine.clement0985@gmail.com" target="blank">ludivine.clement0985@gmail.com</a></li>
          <li className='flex mb-4'>
            <PiPhoneCallFill className='text-xl text-color-light mr-4' />
            <a href='tel:0768615727'>07 68 61 57 27</a>
          </li>
          <li className='flex mb-4'><FaLocationDot className='text-xl text-color-light mr-4' /> Nogent le rotrou, Eure et Loir</li>
          <li className='flex mb-4'><TbFlagFilled className='text-xl text-color-light mr-4' /> Française</li>
        </ul>
      </div>

      <h3 className="text-2xl mb-10 font-bold text-slate-700 relative after:content-[''] after:absolute after:opacity-50 after:-top-1 after:-left-2 after:h-5 after:w-5 after:bg-6px after:-z-10 after:bg-repeating-radial-gradient after:bg-repeat ">Mes <span className='text-color-light'>services</span></h3>
      <div className='flex gap-10 flex-wrap mb-20'>
        <div className='w-[45%]'>
          <BsCodeSlash className='text-4xl text-color-light' />
          <h4 className='font-bold my-3 text-lg'>Intégration et création web</h4>
          <p>En tant que développeuse front-end, je suis compétente dans l&apos;intégration de designs créatifs en sites web fonctionnels. J&apos;ai la capacité de prendre des maquettes de conception et de les transformer en sites web interactifs et esthétiques. Mon expérience me permet de travailler avec une variété de langages et de technologies pour donner vie à des projets web.</p>
        </div>
        <div className='w-[45%]'>
          <IoIosSpeedometer className='text-4xl text-color-light' />
          <h4 className='font-bold my-3 text-lg'>Optimisation de site</h4>
          <p> L&apos;optimisation de site web est essentielle pour offrir une expérience utilisateur fluide. Je peux contribuer à l&apos;amélioration des performances de votre site web en identifiant et en résolvant les problèmes de vitesse, de sécurité et d&apos;efficacité. Mon objectif est de garantir que chaque visiteur du site bénéficie d&apos;une expérience optimale.</p>
        </div>
        <div className='w-[45%]'>
          <MdScreenRotation className='text-4xl text-color-light' />
          <h4 className='font-bold my-3 text-lg'>Responsive Design</h4>
          <p>Aujourd'hui, il est crucial que les sites web s'adaptent à différents appareils et écrans. Je suis compétente dans la création de sites web responsifs qui conservent leur fonctionnalité et leur esthétique, que ce soit sur un ordinateur de bureau, une tablette ou un téléphone mobile. Mon approche du responsive design garantit une expérience utilisateur uniforme.</p>
        </div>
        <div className='w-[45%]'>
          <BsSearchHeart className='text-4xl text-color-light' />
          <h4 className='font-bold my-3 text-lg'>SEO</h4>
          <p>L'optimisation des moteurs de recherche est essentielle pour augmenter la visibilité en ligne d'un site web. Je suis en mesure d'appliquer des pratiques de SEO de base pour améliorer le classement d'un site dans les résultats de recherche. Cela inclut la recherche de mots-clés, l'optimisation du contenu et l'amélioration de la structure du site pour une meilleure indexation par les moteurs de recherche.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-[1px] border-gray-100">
      <h3 className="text-2xl mb-4 font-bold text-slate-700 relative after:content-[''] after:absolute after:opacity-50 after:-top-1 after:-left-2 after:h-5 after:w-5 after:bg-6px after:z-0 after:bg-repeating-radial-gradient after:bg-repeat ">Centres <span className='text-color-light'>d'intérêt</span></h3>
        <p className="text-gray-600 [word-spacing:4px]">
          Pâtisserie, cinéma, sports, documentaires historiques, de voyage ou scientifiques.
        </p>
      </div>


    </section>
  );
};

export default About;