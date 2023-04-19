import React from 'react';
//import data
import { cta } from '../data';

const Cta = () => {
  //destructure cta data
  const { title, subtitle, subtitle2, btnText, bntext4, comp2Text, free, img1} = cta;
  return <section class="text-gray-600 body-font mx-auto mt-24 bg-[#FAFAFA]">
  <div class="container min-w-full px-0 flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-32">
      <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">Plan Your Social Media Content
        <br class="hidden lg:inline-block" />
      </h1>
      <p class="mb-8 leading-relaxed">Add your posts to a content calendar that will cover weeks of posting. Import different content types and ideas, add them to your posting schedule, and have them shared automatically for you.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{btnText}</button>
        <button class="ml-4 inline-flex text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{bntext4}</button>
      </div>
      <p class="text-sm mt-2 text-black mb-8 w-full font-bold">14-Day Free Trial, No Credit Card Required</p>

    </div>
    <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={img1} />
    </div>
  </div>
</section>
  
  
  
  
  
  
  
  
  
  
  
};

export default Cta;
