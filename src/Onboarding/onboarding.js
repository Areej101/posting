import React from "react";
import { onboarding } from "../data";
import { Link } from "react-router-dom";

const Onboarding = () => {
    const { logo, text, image11,image12,image13, image14,image15,image16,image17,image18,image19,image20} = onboarding;
    return <section>
        <header className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#A57CE6]'>
            {/* logo */}
            <a href="# " className='flex sm:mb-3'>
                <img src={logo} className='mx-[70px] h-[25px] mt-[-5px]' alt="" />
                <span className='font-bold text-white mt-[-5px] mx-[-60px]'>{text}</span>
            </a>
            <div className='flex justify-evenly mt-[-40px] text-white'>
            <span className='font-bold text-[30px]'>Onboarding</span>
            <Link to='/schedule' className="mx-[-420px] btn btn-md md:btn-md btn-[#A57CE6] bg-[#A57CE6]"><span className='mx-[30px] underline underline-offset-1 text-sm'>Skip Onboarding</span>Next</Link>
            </div>
        </header>
        <div className='flex gap-[80px] mx-[375px] mt-[25px] text-[15px] font-bold'>
            <p className='mx-[17px]' >Social Profiles</p>
            <p>Content</p>
            <p className='mx-[20px]'>Create Schedule</p>
        </div>
        <div className='bg-[#EFEFEF] mt-[50px] h-[490px] rounded rounded-tl-[100px] rounded-tr-[100px]'>
            <div className='flex h-[50px] gap-[80px] mx-[395px] '>
                <div className='mt-[-50px] bg-[#FFFFFF] h-[100px] w-[100px] rounded-full drop-shadow-lg hover:bg-[#A57CE6]'>
                <img className= 'mt-[25px] mx-[23px] h-[50px]' src={image11} alt='' />
                </div>

                <div className='mt-[-50px] bg-[#FFFFFF] h-[100px] w-[100px]  rounded-full drop-shadow-lg hover:bg-[#A57CE6]'>
                <Link to='/schedule'>
                <img className='mt-[25px] mx-[28px] h-[45px] color-[#BABABA]' src={image12} alt='' />
                </Link>
                </div >

                <div className='mt-[-50px] bg-[#FFFFFF] drop-shadow-lg hover:bg-[#A57CE6] h-[100px] w-[100px]  rounded-full'>
                <Link to='/scheduleSetup'>
                <img className='mt-[25px] mx-[25px] h-[50px]' src={image13} alt='' />
                </Link>
                </div>

                </div>
                <p className='mt-[30px] mx-[410px] font-bold text-[29px]'>Your Connected Social Profiles</p>
                <p className='mt-[5px] mx-[380px] text-sm'>Connect New Social Profiles or Manage your existing profiles to this workspace</p>

            <div className='bg-[#FFFFFF] mt-[30px] h-[490px] rounded rounded-tl-[100px] rounded-tr-[100px]'>
                <p className='mx-[90px] text-white'>social</p>
                <div className='mx-[200px] mt-[20px] flex'>
                    <img className='h-[50px] mt-[20px]' src={image14} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[20px] mx-[130px] bg-[#5273DB] text-white'>Profile</button>
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[20px] mx-[-50px] bg-[#5273DB] text-white'>Page</button>
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[20px] mx-[130px] bg-[#5273DB] text-white'>Group</button>
                </div>

                <div className='mx-[200px] mt-[40px] flex'>
                    <img className='h-[50px]' src={image15} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[130px] bg-[#A2468D] text-white'>Profile</button>
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[-50px] bg-[#A2468D] text-white'>Business</button>
                </div>

                <div className='mx-[200px] mt-[40px] flex'>
                    <img className='h-[50px]' src={image16} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[130px] bg-[#5276A8] text-white'>Profile</button>
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[-50px] bg-[#5276A8] text-white'>Company</button>
                </div>

                <div className='mx-[200px] mt-[40px] flex'>
                    <img className='h-[50px]' src={image17} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[130px] bg-[#78A4D3] text-white'>Profile</button>
                </div>

                <div className='mx-[200px] mt-[40px] flex'>
                    <img className='h-[50px]' src={image18} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[130px] bg-[#9E443B] text-white'>Profile</button>
                </div>

                <div className='mx-[200px] mt-[40px] flex'>
                    <img className='h-[50px]' src={image19} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[130px] bg-[#000000] text-white'>Profile</button>
                </div>

                <div className='mx-[200px] mt-[40px] flex'>
                    <img className='h-[50px]' src={image20} alt='' />
                    <button className='rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[110px] h-[40px] mt-[2px] mx-[130px] bg-[#C7503C] text-white'>Profile</button>
                </div>

                <div>
                    <Link to='/contentcategory' className='btn btn-lg lg:btn-lg rounded rounded-none bg-[#A57CE6] lg:gap-x-4 w-[200px] mx-[990px] mt-[-50px] text-white drop-shadow-2xl'>Next</Link>
                </div>
                <div className="text-white">
                    Next
                </div>
            </div>
        </div>
    </section>

};

export default Onboarding;