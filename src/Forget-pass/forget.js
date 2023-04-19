import React from "react";
import { signin } from '../data';
import { Link, useNavigate } from 'react-router-dom';




const Forget = () => {
  const { logo5, text7, brands, slides, comment, position } = signin;
  return <section class="text-gray-600 body-font">
    <header>
      <a href="#" class="ml-20 mt-4 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo5} className=" h-9 bg-[#AD7CE6]" alt="" />
        <span class="ml-1 text-[#AD7CE6] text-xl">Automation Post</span>
      </a>
    </header>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Forgot Your Password</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-center">Enter your email address and we will send you <br /> A link to reset your password</p>
      </div>
      <div class="relative flex-grow w-full flex justify-center -mt-12">
        <input type="email" placeholder="Email Address" id="email" name="email" class=" w-72 bg-[#EFEFEF] rounded rounded-full  focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button class="flex mx-auto mt-8 text-white bg-[#A57CE6] border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-sm rounded rounded-full">Send Password Reset Link</button>
      <div className='flex justify-center'>
        <p class="leading-relaxed text-lg font-bold mt-24">New to AutomaticPost? <Link className='text-[#A57CE6]' to='/signup'>Sign up</Link></p>
      </div>
    </div>
  </section>
}


export default Forget;