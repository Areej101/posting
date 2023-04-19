import React from 'react';
//import data
import { overview } from '../data'


const Overview = () => {
    //destructure overview data
    const { productImg, logo1,logo2,logo3,logo4 } = overview;
    return <section class="text-white body-font bg-overview">
    <div class="container px-5 py-20 mx-auto">
      <div class="flex flex-wrap -m-4 gap-8">

        <div class="lg:w-1/4 md:w-1/2 p-4  lg:w-64 bg-[#A57CE6] rounded-3xl">
          <img  src={logo1} class="mx-auto block relative h-28 rounded overflow-hidden">
            
          </img>
          <div class="mt-4">
            <h3 class="text-white text-center font-bold tracking-tight text-3xl mb-1">Manage</h3>
            <h2 class="text-white mx-7 text-center font-medium">Managne your social media profiles from Automatic Post.</h2>
          </div>
        </div>

        <div class="lg:w-1/4 md:w-1/2 p-4 w-full lg:w-64 bg-[#A57CE6] rounded-3xl">
          <img  src={logo2} class="mx-auto block relative h-28 rounded overflow-hidden">
            
          </img>
          <div class="mt-4">
            <h3 class="text-white text-center font-bold tracking-tight text-3xl mb-1">Schedule</h3>
            <h2 class="text-white mx-7 text-center font-medium">Schedule posts ahead of time in a calendar.</h2>
          </div>
        </div>

        <div class="lg:w-1/4 md:w-1/2 p-4 w-full lg:w-64 bg-[#A57CE6] rounded-3xl">
          <img  src={logo3} class="mx-auto block relative h-28 rounded overflow-hidden">
            
          </img>
          <div class="mt-4">
            <h3 class="text-white text-center font-bold tracking-tight text-3xl mb-1">Publish</h3>
            <h2 class="text-white mx-7 text-center font-medium">Share content across all your social media profiles.</h2>
          </div>
        </div>

        <div class="lg:w-1/4 md:w-1/2 p-4 w-full lg:w-64 bg-[#A57CE6] rounded-3xl">
          <img  src={logo4} class="mx-auto block relative h-28 rounded overflow-hidden">
            
          </img>
          <div class="mt-4">
            <h3 class="text-white text-center font-bold tracking-tight text-3xl mb-1">Analyze</h3>
            <h2 class="text-white mx-7 text-center font-medium">Get insightful data about your social media growth.</h2>
          </div>
        </div>

      </div>
    </div>
  </section>
    ;
};

export default Overview;