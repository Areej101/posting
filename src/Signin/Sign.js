import React, { Component } from 'react';
import { signin } from '../data';
import './Sign.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
  const { logo5, text7, brands,slides,comment, position } = signin;
  const [signIn] = React.useState(true);
  return <section>
    <div className=''>
      {/* logo */}
      <a href="# " className='flex sm:mb-3'>
        <img src={logo5} className='mx-[100px] h-[25px] mt-[10px] bg-[#A57CE6]' alt="" />
        <span className='font-bold text-[#A57CE6] mt-[10px] mx-[-80px]'>{text7}</span>
      </a>
    </div>
    <div className=' curved bg-[#A57CE6] w-[500px] mx-[780px] h-[600px] mt-[-50px]'>
      {/**slider */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
       // pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} className=''>
            <img className='h-[180px] mx-[150px] mt-[120px]' src={slide.image} alt={slide.comment} />
            <div className='text-center font-normal text-[50px] text-white mt-[20px] mx-[40px] leading-[55px]'>{slide.comment}</div>
            <div className='text-center font-normal text-[17px] text-[#F5DC4D] mt-[5px]'>{slide.position}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div class="w-[1100px]">
      <form class="bg-white mt-[-500px] mx-[300px] w-[300px] mb-4">
        <h1 className=' text-[30px] mt-[-100px] text-center font-bold'>Sign In Continue</h1>
        <div class="mb-4 mt-[40px]">
          <input class="bg-[#EFEFEF] rounded-[20px] h-[45px] text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
        </div>
        <div class="mb-6">
          <input class="bg-[#EFEFEF] rounded-[20px]  h-[45px] text-sm w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
          <p class="text-red-500 text-xs italic"></p>
        </div>
        <div className='mt-[-40px] mx-[180px] w-[300px]'>
          <Link class=" text-sm text-[#A57CE6]   hover:text-blue-800" to="/forget">
            Forgot Password?
          </Link>
        </div>
        <div class="flex flex-row items-center justify-between mt-[35px]">
          <Link class="bg-[#A57CE6] w-[300px] hover:bg-blue-700 text-white font-bold py-2 px-4 btn btn-md md:btn-md rounded-[30px] focus:outline-none focus:shadow-outline" type="button" to="/onboarding">
            Sign In
          </Link>
        </div>
        <div className='mt-[5px] mx-[98px] w-[300px]'>
          <a class=" text-sm text-[black]   hover:text-blue-800" href="#">
            Or continue with
          </a>
        </div>
        <div className='flex gap-[20px] justify-center items-center mt-[20px]'>
          {/**brands */}
          {brands.map((item, index) => {
            //destructure item
            const { image, delay } = item;
            return <div key={index} className=''>
              {/** brand img */}
              <img className=' h-[40px]' src={image} alt='' />
            </div>
          })}
        </div>
        <div className='mt-[30px]'>
          <h2 className='font-bold'>New to AutomaticPost? <Link className='text-[#A57CE6]' to='/signup'>Sign up</Link></h2>
        </div>
      </form>
    </div>
  </section>


};

export default Sign;
