import React from 'react';
//import data
import { features } from '../data';
import {HiMail} from 'react-icons/hi'

const Feature1 = () => {
  const{feature1} = features;
  const {title,image, btnIcon, btntext5} = feature1;
  return <section class="text-black body-font mt-8" data-aos='fade-up' data-aos-delay='600'>
  <div class="container px-5 py-24 mx-auto bg-[#DFD7F9] rounded rounded-tl-[150px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]">
    <div class="flex flex-col text-center w-full mb-12" data-aos='fade-up' data-aos-delay='700'>
      <h1 class="sm:text-3xl text-md font-medium title-font mb-4 text-gray-900 text-center"></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-3x1 -mt-8">Subscribe to get information, latest news and other < br />interesting offers about Automatic Post</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end" data-aos='fade-up' data-aos-delay='700'>
     
      <div class="relative flex-grow w-full ml-48">
        <label for="email" class="leading-7 text-sm text-gray-600"></label>
        <input type="email" id="email" name="email" class="w-[300px] bg-[#FFFFFF] rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button class="text-white bg-[#A57CE6] border-0 py-2 px-8 mr-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
    </div>
  </div>
</section>
};

export default Feature1;
