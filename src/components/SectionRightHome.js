import React from 'react';
import About from './About';
import Formation from './Formation';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Home from './Home';

const SectionRightHome = () => {
  return (
    <div className="absolute right-0 w-2/3" id='home'>
      <Home />
      <About />
      <Formation />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default SectionRightHome;