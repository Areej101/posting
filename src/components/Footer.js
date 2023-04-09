import React from 'react';
//import data
import { footer } from '../data';
//import components
import Copyright from '../components/Copyright';

const Footer = () => {
  //destructure footer data
  const { logo, links, legal, newsletter, form, Vision, terms, btnext7, title8,title7, icon1,icon2,icon3} = footer;
  return <footer className='' data-aos='fade-up' data-aos-delay='700'>
    <div className='conainer mx-auto bg-[#A57CE6] mt-[100px] h-[400px]'>
      <div className=' flex flex-col'>
      <button className='btn btn-[#542E90] btn-outline bg-[#542E90] text-white w-[150px] h-[30px] rounded rounded-full mx-[200px] mt-[70px]'>{btnext7}</button>
      <div>
        {/** logo */}
        <h2 className='text-white mt-[20px] mx-[200px]'>{title7}</h2>
      </div>
      <div className=''>
        <h2 className='text-white text-sm mt-[30px] mx-[200px]'>{title8}</h2>
      </div>
      </div>
      <h2 className='mt-[-130px] mx-[660px] w-[600px] text-gray text-light'>Quick Links</h2>
      <div className='items-center text-center flex flex-row gap-x-[70px] mx-[650px] w-[900px] h-[100px] mt-[40px]'>
        
      {/** list */}
      <div className='text-sm mb-3 text-white'>
        <ul className='flex flex-col gap-y-3'>
          {links.map((item, index) => {
            //destructure item
            const { href, name } = item
            return <li key={index}>
              <a className='' href={href}>{name}</a>
            </li>
          })}
        </ul>
      </div>
      {/** list 2 */}
      <div className='text-sm mb-3 text-white'>
        <ul className='flex flex-col gap-y-3'>
          {Vision.map((item, index) => {
            //destructure item
            const { href, name } = item
            return <li key={index}>
              <a className='' href={href}>{name}</a>
            </li>
          })}
        </ul>
      </div>
       {/** list 3 */}
       <div className='text-sm mb-3 text-white'>
        <ul className='flex flex-col gap-y-3'>
          {terms.map((item, index) => {
            //destructure item
            const { href, name } = item
            return <li key={index}>
              <a className='' href={href}>{name}</a>
            </li>
          })}
        </ul>
      </div>
      </div>
      </div>


  </footer>;
};

export default Footer;
