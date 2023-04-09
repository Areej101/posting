import React from 'react';
//import data
import { overview } from '../data'


const Overview = () => {
    //destructure overview data
    const { productImg, logo1,logo2,logo3,logo4 } = overview;
    return <section className='-my-20 mt-[-130px] min-h-[200px] lg:min-h-[300px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]' data-aos='fade-up' data-aos-offset='200'>
        <div className='container mx-auto'>
            <div className='flex flex-row jusify-center items-center gap-6 h-[140px]'>
                <a href="#" className='h-[250px] w-[300px] block max-w-sm p-6 bg-[#A57CE6] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white justify-center items-center' data-aos='fade-up' data-aos-offset='300'>
                <img src={logo1} className='mx-auto h-[70px] w-[50px]' alt="" />
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white text-[30px] mx-auto text-center'>Manage</h5>
                    <p className='font-normal text-[17px] mx-[30px] text-center'>Manage your social media profiles from Automatic Post.</p>
                </a>
                <a href="#" className='h-[250px] w-[300px] block max-w-sm p-6 bg-[#A57CE6] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white'  data-aos='fade-up' data-aos-offset='300'>
                <img src={logo2} className='mx-auto h-[70px] w-[50px]' alt="" />
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white text-[30px] mx-auto text-center'>Schedule</h5>
                    <p className='font-normal text-[17px] mx-[30px] text-center'>Schedule posts ahead of time in a calendar.</p>
                </a>
                <a href="#" className=' h-[250px] w-[300px] block max-w-sm p-6 bg-[#A57CE6] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white'  data-aos='fade-up' data-aos-offset='300'>
                <img src={logo3} className='mx-auto h-[70px] w-[50px]' alt="" />
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white text-[30px] mx-auto text-center'>Publish</h5>
                    <p className='font-normal text-[17px] mx-[30px] text-center'>Share content across all your social media profiles.</p>
                </a>
                <a href="#" className=' h-[250px] w-[300px] block max-w-sm p-6 bg-[#A57CE6] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white'  data-aos='fade-up' data-aos-offset='300'>
                <img src={logo4}className='mx-auto h-[70px] w-[50px]'  alt="" />
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white text-[30px] mx-auto text-center'>Analyze</h5>
                    <p className='font-normal text-[17px] mx-[30px] text-center'>Get insightful data about your social media growth.</p>
                </a>
            </div>
        </div>
    </section>
    ;
};

export default Overview;