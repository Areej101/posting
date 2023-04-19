import React from 'react';
//import data
import { hero } from '../data'
//import icons
import {HiOutlineChevronDown} from 'react-icons/hi'
import {HiArrowPath} from 'react-icons/hi2'

const Hero = () => {
    //destrucure hero data
    const {title, subtitle, btnText,btn2Text, compText,free, image} = hero;
  return <section class="text-gray-600 body-font mx-auto -mt-24">
  <div class="container min-w-full px-0 flex  py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-32">
      <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">More Leads, Less Effort
        <br class="hidden lg:inline-block" />
      </h1>
      <p class="mb-8 leading-relaxed">Automatic Post helps you manage your social media accounts from one place—create, schedule, publish, and analyze. Save time and grow your profiles with an affordable tool.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{btnText}</button>
        <button class="ml-4 inline-flex text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{btn2Text}</button>
      </div>
      <p class="text-sm mt-2 text-black mb-8 w-full font-bold">14-Day Free Trial, No Credit Card Required</p>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={image} />
    </div>
  </div>
</section>
};

export default Hero;
