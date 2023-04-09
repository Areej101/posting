import React from 'react';
//import data
import {Swiper, SwiperSlide} from 'swiper/react';
//import swiper styles
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';


const ClientSlider = ({ clients }) => {
  return <Swiper
  modules={[Navigation, Pagination, A11y]}
  slidesPerView={1} spaceBetween={30} grabCursor={true} loop={true} breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}>
    {clients.map((client, index) =>{
      //destructure client
      const {message, image, name, position, borderColor, comment} = client;
      //slide
      return <SwiperSlide key={index} style={{}} className=' rounded-t-[12px]'>
        {/** cards */}
        <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[250px] rounded-[12px] py-6 px-[[30px] bg-white overflow-hidden shadow-lg'>
          {/**person message */}
          <div className='text-[20px] font-bold mx-[30px]'>{comment}</div>
          <div className='mt-[7px] mx-[30px] text-[14px]'>{message}</div>
          {/**person name, image, position */}
          <div className=' '>
            <img src={image} className='mx-[35px] mt-[17px]' alt='' />
            <div className='font-bold mx-[80px] mt-[-35px]'>{name}</div>
            <div className='mx-[80px] text-[14px] text-light'>{position}</div>
          </div>

        </div>
        </SwiperSlide>;
    })}

  </Swiper>
};

export default ClientSlider;
