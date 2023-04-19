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
     <h1 class="text-3xl title-font text-gray-900 mb-12 text-center font-bold">Trusted by 100's</h1>
     <h1 class="text-3xl  title-font text-gray-900 -mt-10 text-center font-bold">of users</h1>

     {/**slider */}
     <div className='mt-10'>
      <ClientSlider clients={clients} />
     </div>
    </div>
  </section>
};

export default Testimonials;
