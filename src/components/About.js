import React from 'react';
import Heading from './Heading';
import { MdCake } from 'react-icons/md';
import { IoIosPaperPlane } from 'react-icons/io';
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { TbFlagFilled } from 'react-icons/tb';


const About = () => {
  return (
    <section id='about'>
      <Heading title="Qui suis-je ?" />
      <div className='flex gap-14 mb-20'>
        <div className='w-1/2 leading-[1.625rem]'>Je m&#39;appelle Ludivine, et je suis constamment animée par une insatiable curiosité qui m&#39;amène à explorer divers domaines technologiques. Cependant, ne vous y trompez pas, je ne suis pas enfermée derrière un écran d&#39;ordinateur, bien que cela soit souvent ma source d&#39;inspiration principale ! Ce qui me passionne avant tout, ce sont les individus passionnés, tout comme moi, qui aiment partager leurs connaissances.</div>

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
      <h3 className="text-xl mb-7 font-bold text-slate-700 relative after:content-[''] after:absolute after:opacity-50 after:-top-1 after:-left-2 after:h-5 after:w-5 after:bg-6px after:-z-10 after:bg-repeating-radial-gradient after:bg-repeat ">Mes <span className='text-color-light'>services</span></h3>
      <div className='flex gap-10 flex-wrap'>
        <div className='w-[45%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid impedit at quidem nam quaerat hic, aut praesentium laborum placeat soluta nemo voluptas dicta consequatur omnis! Corporis sed deleniti libero, beatae incidunt error amet distinctio omnis dolor quia laborum aliquam soluta.</div>
        <div className='w-[45%]' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ab tempore asperiores, esse maiores itaque ipsam quas cumque consectetur dolores consequuntur nulla repellat quis veniam deserunt ullam nobis beatae omnis odit rem dolore quisquam! Sit, at? Corrupti exercitationem perferendis ipsum.</div>
        <div className='w-[45%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus debitis nisi suscipit dolore doloribus voluptatem quod tempore harum vitae soluta cumque fuga architecto laudantium impedit necessitatibus sit corrupti ab illo, autem aperiam. Autem optio exercitationem asperiores, voluptatem cupiditate minus excepturi.</div>
        <div className='w-[45%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ducimus. Deleniti at voluptates iusto repudiandae repellendus eius consequuntur iure consectetur cum saepe, deserunt in animi aut delectus ab? Incidunt accusamus assumenda maiores. Architecto accusamus cumque animi ullam voluptates repellendus a.</div>
      </div>
    </section>
  );
};

export default About;