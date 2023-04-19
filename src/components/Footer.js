import React from 'react';
//import data
import { footer } from '../data';
//import components
import Copyright from '../components/Copyright';

const Footer = () => {
  //destructure footer data
  const { logo, links, legal, newsletter, form, Vision, terms, btnext7, title8,title7, icon1,icon2,icon3} = footer;
  return <footer class="text-white body-font bg-[#AD7AED] mt-8">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <span class="inline-block py-1 px-2 rounded bg-[#542E90] text-white text-xs font-medium tracking-widest ml-3 rounded-full">CONTACT US</span>
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        
        <span class="ml-3 text-xl mt-3">Contact@automaicpost.com</span>
      </a>
      <p class="mt-8 px-4 text-sm text-white">Social Media</p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <a class="ml-32 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        </span>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">


      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"></a>
          </li>
        </nav>
      </div>


      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white opacity-40 tracking-widest text-sm mb-3">Quick Links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Home</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Pricing</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Resources</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Blog</a>
          </li>
        </nav>
      </div>


      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Vision</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Mission</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Join Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Connect</a>
          </li>
        </nav>
      </div>



      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Privacy & Terms</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Google</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Alphabet</a>
          </li>
         
        </nav>
      </div>



    </div>
  </div>
  <div class="bg-[#AD7AED]">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-white text-sm text-center sm:text-left">Copyright 2023 Automatic Post.
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-white ml-1" target="_blank">All rights reserved.</a>
      </p>
      
    </div>
  </div>
</footer>
};

export default Footer;
