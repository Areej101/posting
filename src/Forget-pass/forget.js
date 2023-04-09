import React from "react";
import { signin } from '../data';
import { Link, useNavigate } from 'react-router-dom';




const Forget = () =>{
const { logo5, text7, brands,slides,comment, position } = signin;
    return <section>
         <div className=''>
        {/* logo */}
        <a href="# " className='flex sm:mb-3'>
          <img src={logo5} className='mx-[100px] h-[25px] mt-[10px] bg-[#A57CE6]' alt="" />
          <span className='font-bold text-[#A57CE6] mt-[10px] mx-[-80px]'>{text7}</span>
        </a>
      </div>
      <div>
        <form>
            <h1 className='text-bold text-[50px] mt-[80px] mx-[350px]'>Forget Your Password</h1>
            <div className='mt-[30px] mx-[420px] font-bold text-sm text-center w-[315px]'>Enter your email and we will send you A link to reset your password</div>
            <div class="flex flex-row items-center justify-between">
            <div class="mb-4">
            <input class="bg-[#EFEFEF] mt-[-30px] w-[350px] mx-[400px] rounded-[20px] h-[45px] text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
          </div>
          <div className=''>
            <button class="bg-[#A57CE6] w-[300px] mx-[-860px] mt-[130px] hover:bg-blue-700 text-white py-2 px-4 btn btn-md md:btn-md rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
              Send Password Reset Link
            </button>
            </div>
          </div>
        </form>
      </div>
      <div className='mt-[100px] mx-[430px]'>
            <h2 className='font-bold'>Already Have an Account? <Link className='text-[#A57CE6]' to='/signin'>Sign In</Link></h2>
          </div>
    </section>
}


export default Forget;