import React, { Component } from 'react';
import { signin } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const { logo5, text7, brands,slides,comment, position } = signin;
    const [signIn] = React.useState(true);
    return <section class="text-gray-600 body-font overflow-hidden">
    <div className='container flex flex-wrap mx-auto'>
      <header>
        <a href="#" class="ml-20 mt-4 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo5} className=" h-9 bg-[#AD7CE6]" alt="" />
          <span class="ml-1 text-[#AD7CE6] text-xl">Automation Post</span>
        </a>
      </header>

      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex p-8 sm:flex-col flex-col ml-96 ">
          <div className='curved bg-[#A57CE6] lg:-mt-12 xl:w-1/4 lg:w-1/2 md:w-full sm:w-32'>
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
                  <div className='text-center font-normal  lg:text-[40px] text-white lg:mt-[20px] leading-[55px]'>{slide.comment}</div>
                  <div className='text-center font-normal text-[17px] text-[#F5DC4D] mt-[5px]'>{slide.position}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div class="p-4 lg:w-1/2 md:w-full -mt-[550px]">
        <div class="flex  p-8 sm:flex-col flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-4xl title-font text-center font-medium mb-3">Create Your Account</h2>
            <div class="relative flex-grow w-full flex justify-center">
              <input type="email" placeholder="Email Address" id="email" name="email" class=" w-72 bg-[#EFEFEF] rounded rounded-full  focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative flex-grow w-full flex justify-center">
              <input type="email" placeholder="Password" id="email" name="email" class=" mt-3 w-72 bg-[#EFEFEF] rounded rounded-full focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className='flex items-center justify-evenly'>
              <p class="leading-relaxed text-base text-white">Forget Password?</p>
              <Link class=" text-sm text-[#A57CE6]   hover:text-blue-800" to="/forget">
                <p class="leading-relaxed text-base">Forget Password?</p>
              </Link>
            </div>
            <div className='flex justify-center'>
              <Link to="/onboarding">
                <button class=" mt-3 w-72 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none rounded rounded-full hover:bg-purple-600 text-lg">Sign in</button>
              </Link>
            </div>
            <p class="leading-relaxed text-base text-center mt-3">or continue with</p>

            <div className='flex justify-center gap-10 mt-6'>
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
            <div className='flex justify-center'>
              <p class="leading-relaxed text-base font-bold mt-3">New to AutomaticPost? <Link className='text-[#A57CE6]' to='/signin'>Sign in</Link></p>
            </div>


          </div>
        </div>
      </div>

    </div>
  </section>
  
};

export default Signup;