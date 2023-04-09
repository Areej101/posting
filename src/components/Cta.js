import React from 'react';
//import data
import { cta } from '../data';

const Cta = () => {
  //destructure cta data
  const { title, subtitle, subtitle2, btnText, bntext4, comp2Text, free, img1} = cta;
  return <section className='mt-[10px] min-h-[350px] lg:min-h-[350px] bg-grey bg-left-top pt-[30px] lg:pt-[87px]' data-aos='fade-up' data-aos-delay='600'>
    <div className='container mx-auto'>
      <div className='flex flex-col max-w-[600px] mx-[240px] justify-center-items-center'>
      <h2 className=' text-[23px] mx-[30px] text-center mt-[-30px] font-bold mb-[13px]'>{title}</h2>
      <h2 className='font-normal text-[17px] mx-[30px] text-center'>{subtitle}</h2>
      <h2 className='font-normal text-[17px] mx-[30px] text-center'>{subtitle2}</h2>
      </div>
      <div className='flex gap-x-[30px] mt-[60px] max-w-[600px] mx-[330px]'>
      <button className='btn btn-md md:btn-md bg-[#A57CE6] lg:gap-x-4 text-white'>{btnText}</button>
      <span className='mt-[10px]'>{comp2Text}</span>
      <button className='btn btn-md md:btn-md bg-[#A57CE6] lg:gap-x-4 text-white'>{bntext4}</button>
      </div>
      <span className='flex flex-row max-w-[600px] mx-[370px] mt-[20px] font-bold justify-center-items-center'>{free}</span>
    </div>
    {/* image */}
    <div className=''>
                <img className='h-[390px] mt-[-330px] mx-[980px]' src={img1} alt='' />
            </div>
  </section>
};

export default Cta;
