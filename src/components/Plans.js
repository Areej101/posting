import React from "react";
import { onboarding } from "../data";

const Plans = () => {
    const { logo, text } = onboarding;
    return <section class="text-gray-600 body-font overflow-hidden">
        <header class="text-gray-600 body-font bg-[#A57CE6]">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className=" h-9" alt="" />
          <span class="ml-1 text-white text-xl">Automation Post</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class=" lg:mr-40 text-white text-3xl font-bold">Plans</a>

        </nav>
       
      </div>
    </header>
    <div class="container px-5 py-24 mx-auto">
        
      <div class="flex flex-col text-center w-full mb-20">
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-bold">Get 7 days of Free Trial (No Credit Card Required)</p>
        
      </div>

      <div class="flex flex-wrap -m-4">
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full bg-[#575757]">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">Standard</h1>
            <p class="flex items-center text-white mb-2">
             5 Social Profiles (1 User)
            </p>
            <p class="flex items-center text-white mb-2">
             7 days for Free (No Card)
            </p>
            <p class="flex items-center text-white mb-2">
             Custom URL Shortener
            </p>
            <p class="flex items-center text-white mb-2">
             Yearly / Six Months
            </p>
           
            <p class=" mt-auto text-7xl font-bold text-white text-center">$5</p>
            <p class="text-xs text-white mt-3 text-center">Per User/Month</p>
          </div>
        </div>

        <div class="p-4 xl:w-1/4 md:w-1/2 w-full bg-[#9F9DA0]">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h1 class="text-5xl  text-white pb-4 mb-4 border-b border-gray-200 leading-none">Silver</h1>
            <p class="flex items-center text-white mb-2">
             10 Social Profiles (2 User)
            </p>
            <p class="flex items-center  text-white mb-2">
             Cancel Plan Anytime
            </p>
            <p class="flex items-center  text-white mb-2">
             Custom URL Shortener
            </p>
            <p class="flex items-center  text-white mb-2">
             Automaic Hashtag
            </p>
            <p class="flex items-center  text-white mb-2">
             Yearly / Six Months
            </p>
           
            <p class=" mt-auto text-7xl font-bold  text-white text-center">$15</p>
            <p class="text-xs  text-white mt-3 text-center">Per User/Month</p>
          </div>
        </div>

        <div class="p-4 xl:w-1/4 md:w-1/2 w-full bg-[#575757]">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h1 class="text-5xl  text-white pb-4 mb-4 border-b border-gray-200 leading-none">Gold</h1>
            <p class="flex items-center  text-white mb-2">
             15 Social Profiles (4 User)
            </p>
            
            <p class="flex items-center  text-white mb-2">
             Custom URL Shortener
            </p>
            <p class="flex items-center  text-white mb-2">
             Automatic Hashtag
            </p>
            <p class="flex items-center  text-white mb-2">
             Yearly / Six Months
            </p>
           
            <p class=" mt-20 text-7xl font-bold  text-white text-center">$35</p>
            <p class="text-xs  text-white mt-3 text-center">Per User/Month</p>
          </div>
        </div>

        <div class="p-4 xl:w-1/4 md:w-1/2 w-full bg-[#9F9DA0]">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h1 class="text-5xl  text-white pb-4 mb-4 border-b border-gray-200 leading-none">Platinum</h1>
            <p class="flex items-center  text-white mb-2">
             30 Social Profiles (10 User)
            </p>
            <p class="flex items-center  text-white mb-2">
             Custom URL Shortener
            </p>
            <p class="flex items-center  text-white mb-2">
             Automaic Hashtag
            </p>
            <p class="flex items-center  text-white mb-2">
             Yearly / Six Months
            </p>
           
            <p class=" mt-20 text-7xl font-bold  text-white text-center">$65</p>
            <p class="text-xs  text-white mt-3 text-center">Per User/Month</p>
          </div>
        </div>

      </div>
    </div>
  </section>
};


export default Plans;