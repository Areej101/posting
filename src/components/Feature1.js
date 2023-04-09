import React from 'react';
//import data
import { features } from '../data';
import {HiMail} from 'react-icons/hi'

const Feature1 = () => {
  const{feature1} = features;
  const {title,image, btnIcon, btntext5} = feature1;
  return <section data-aos='fade-up' data-aos-delay='400'>
    <div className='container bg-[#DFD7F9] mt-[95px] h-[245px] w-[600px] mx-[340px] rounded-tl-[90px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[20px]'>
      <img src={image} className='h-[70px] mx-[510px]' alt='' />
      <p className='text-center text-[25px]'>{title}</p>
      <div className='flex gap-x-[6px] mt-[30px]'>
        <input className='mx-[50px] shadow appearance-none border rounded w-[290px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' id="username" type="text" placeholder="Your email"></input>
        <button className='btn btn-md md:btn-md bg-[#A57CE6] text-white'>{btntext5}</button>
      </div>
    </div>

  </section>
};

export default Feature1;
