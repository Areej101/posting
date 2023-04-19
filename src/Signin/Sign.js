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
  const { logo5, text7, brands, slides, image, comment, position } = signin;
  const [signIn] = React.useState(true);
  return <section class="text-gray-600 body-font">
    <header>
      <a href="#" class="ml-20 mt-4 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo5} className=" h-9 bg-[#AD7CE6]" alt="" />
        <span class="ml-1 text-[#AD7CE6] text-xl">Automation Post</span>
      </a>
    </header>
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap -m-4">

        <div class="p-4 lg:w-1/2 md:w-full -mt-10">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-4xl title-font text-center font-medium mb-3">Sign in Continue</h2>
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
                <p class="leading-relaxed text-base font-bold mt-3">New to AutomaticPost? <Link className='text-[#A57CE6]' to='/signup'>Sign up</Link></p>
              </div>


            </div>
          </div>
        </div>


        <div class="p-4 lg:w-1/2 lg:h-screen lg:-mt-36 md:w-full bg-[#AD7CE6]">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div className='flex-grow h-62 w-36 flex justify-items-center lg:'>
                {/**slider */}
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  // pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  className=''
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.image} className=''>
                      <img className='' src={slide.image} alt={slide.comment} />
                      <div className='text-center font-normal text-lg text-white'>{slide.comment}</div>
                      <div className='text-center font-normal text-[#F5DC4D]'>{slide.position}</div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
            
            <div class="flex-grow mt-40">
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-purple-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>






          </div>
        </div>



      </div>
    </div>
  </section>

};

export default Sign;

