import React from 'react';

const Heading = ({title}) => {
  return (
    <h2 className="text-3xl text-slate-700 pl-2 font-bold uppercase relative mb-10 after:content-[''] after:absolute after:opacity-50 after:-top-[10%] after:-left-1 after:h-6 after:w-6 after:bg-6px after:-z-10 after:bg-repeating-radial-gradient after:bg-repeat">{title}</h2>
  );
};

export default Heading;