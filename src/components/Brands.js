import React from 'react';
//import data
import { overview } from '../data';

const Brands = () => {
  //destructure overview
  const {brands, textSocial} =overview;
  return <section className='py-9 my-20' data-aos='fade-up' data-aos-delay='400'>
    <span className='mx-auto flex flex-col lg:flex-row items-center justify-center mb-4 font-bold'>{textSocial}</span>
    <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 space-y-1'>
      {/**brands */}
      {brands.map((item, index) => {
        //destructure item
        const {image, delay} = item;
        return <div key={index} className=''>
          {/** brand img */}
          <img src={image} data-aos='fade-down' data-aos-delay='500' alt='' className='h-[40px]'/>
        </div>
      })}

    </div>

  </section>
};

export default Brands;