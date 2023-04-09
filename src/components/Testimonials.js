import React from 'react';

//import data
import {testimonials} from '../data';
//import components
import ClientSlider from '../components/ClientSlider';
const Testimonials = () => {
  //destructure testimonials
  const {title, title2,btnText3, clients, title3} = testimonials;
  return <section className='section min-h-[150px] lg:min-h-[300px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]' data-aos='fade-up' data-aos-delay='500'>
    <div className='container mx-auto'>
     {/**title */}
     <button className='btn btn-[#7EB168] btn-outline bg-[#7EB168] text-white lg:flex w-[200px] h-[30px] rounded rounded-full -mt-12 text-sm mx-auto mb-2 '>{btnText3}</button>
     <h2 className='title text-center max-w-[920px] mx-[30px] text-green-600'>{title}</h2>
     <h2 className='title  -mt-[63px] text-center w-[1000px] mx-[130px] gap-[10px]'>{title3}</h2>
     <h2 className='title  -mt-5 text-center max-w-[920px] mx-auto'>{title2}</h2>
     {/**slider */}
     <div>
      <ClientSlider clients={clients} />
     </div>
    </div>
  </section>
};

export default Testimonials;
