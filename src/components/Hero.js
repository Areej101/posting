import React from 'react';
//import data
import { hero } from '../data'
//import icons
import {HiOutlineChevronDown} from 'react-icons/hi'
import {HiArrowPath} from 'react-icons/hi2'

const Hero = () => {
    //destrucure hero data
    const {title, subtitle, btnText,btn2Text, compText,free, image} = hero;
  return <section className='min-h-[900px] py-12'>
    <div className='container mx-auto h-[900px flex justify-center items-center'>
        <div className='flex flex-col md:gap-x-[30px] gap-y-16 lg:gap-y-0 
        lg:flex-row items-center justify-center text-center lg:text-left'>
            {/* text */}
            <div className='flex-1'>
                <h3 className='title mb-4 lg:mb-8 text-center text-[45px]' 
                data-aos='fade-down'
                data-aos-delay='500'>{title}</h3>
                <p className='mb-5 lg:mb-10 mt-[-5px]'
                data-aos='fade-down'
                data-aos-delay='600'>{subtitle}</p>
                {/*btn & cmp text*/}
                <div className='flex flex-justify items-center max-w-sm
                lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'>
                    <button className='btn btn-md md:btn-md bg-[#A57CE6]
                    flex justify-center items-center lg:gap-x-4 text-white mt-[20px]'
                    data-aos='fade-down' data-aos-delay='700'>{btnText}</button>
                    <span className=' mt-[20px]' data-aos='fade-down' data-aos-delay='700'>{compText}</span>
                    <button className='btn btn-md md:btn-md bg-[#A57CE6]
                      lg:gap-x-4 text-white  mt-[20px]' data-aos='fade-down'
                      data-aos-delay='500'>{btn2Text}</button>
                    {/* write comp2Text here */}
                </div>
                <span className='flex flex-row mt-[10px] mr-[110px] font-bold justify-center items-center' data-aos='fade-down' data-aos-delay='800'>{free}</span>
            </div>
            {/* image */}
            <div className='flex-1 mt-[-50px]'  data-aos='fade-down' data-aos-delay='300'>
                <img src={image} className='h-[500px] mx-[100px]' alt='' />
            </div>
        </div>
    </div>
  </section>;
};

export default Hero;
