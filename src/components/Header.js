import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import data
import { header } from '../data';
//import icons
import {HiArrowPath} from 'react-icons/hi2'
//IMPORT COMPONENTS
import MobileNav from './MobileNav';
import Nav from './Nav';
import { set } from 'mongoose';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signin")
    }
    //mobile nav state
    const [mobileNav, setMobileNav]= useState(false);
     // header state
     const [isActive, setIsActive]= useState(false);
     //destructure header data
     const {logo,text, btnText} = header;
     //scroll event
     useEffect (() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
     })
  return <header className={`${isActive ? 'bg-[#A57CE6]' : 'bg-[#A57CE6]'}
  py-6 lg:py-4 w-full h-[80px] transition-all z-10`} data-aos='fade-down' data-aos-delay='1000'>
    <div className="container mx-auto flex justify-between items center">
        {/* logo */}
        <a href="# " className='flex sm:mb-3' data-aos='fade-down' data-aos-delay='1000'>
            <img src={logo} className='mx-[10px] h-[25px] mt-[1px]' alt="" />
            <span className='text-white font-bold'>{text}</span>
        </a>
        {/* nav- initially hidden - show on desktop mode*/}
        <div className='hidden lg:flex text-sm' data-aos='fade-down' data-aos-delay='1200'>
            <Nav />
        </div>
        {/** cta button- initially hidden -show on desktop */}
        <button onClick={handleClick} className='btn btn-md md:btn-md btn-[#A57CE6] btn-outline bg-[#A57CE6] text-white hidden lg:flex mt-[-12px]' data-aos='fade-down' data-aos-delay='1400'>
            {btnText}
        </button>
        {/** mobile nav trigger btn - hidden on desktop */}
        <button className='lg:hidden' onClick={ () => 
        setMobileNav(!mobileNav)}>
            {mobileNav ? (
                <HiOutlineX className='text-3x1 text-white' />
            ) : (
                <HiMenuAlt4 className='text-3x1 text-white' />

            )}

        </button>
        {/** mobile nav - hidden on desktop */}
        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[35vw] lg:hidden transition-all bg-purple-400`}>
            <MobileNav />
        </div>
    </div>
    </header>;
};

export default Header;
