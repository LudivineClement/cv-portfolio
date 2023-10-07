import React from 'react';

const Heading = ({title}) => {
  return (
    <h2 className="text-3xl font-bold uppercase relative mt-20 after:content-[''] after:block after:absolute after:w-[80px] after:h-1 after:text-center after:-bottom-5 after:left-1 after:m-0 after:z-10 after:bg-color-light">{title}</h2>


  );
};

export default Heading;