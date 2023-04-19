import React from "react";
import { onboarding } from "../data";
import { Link } from "react-router-dom";

const Onboarding = () => {
    const { logo, text, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20 } = onboarding;
    return <section>
        <header class="text-gray-600 body-font bg-[#A57CE6]">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} className=" h-9" alt="" />
                    <span class="ml-1 text-white text-xl">Automation Post</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 text-white text-3xl font-bold">Onboarding</a>

                </nav>
                <span className='inline-flex items-center underline underline-offset-1 text-sm text-white'>Skip Onboarding</span>
                <Link to='/schedule' class="inline-flex items-center text-white gap-5 py-1 px-3 focus:outline-none rounded text-4xl mt-4 md:mt-0 drop-shadow-2xl">
                    Next

                </Link>
            </div>
        </header>


        <div className='flex mt-6 lg:gap-24 gap-8 md:gap-16 justify-center'>
            <h2 class="text-gray-900 font-bold title-font tracking-wider text-sm">Social Profiles</h2>
            <h2 class="text-gray-900 font-bold title-font tracking-wider text-sm">Content</h2>
            <h2 class="text-gray-900 font-bold title-font tracking-wider text-sm">Create Schedule</h2>
        </div>

        {/** next part */}
        <section className="bg-[#EFEFEF] mt-9 rounded rounded-tl-[100px] rounded-tr-[100px]">
            <div class= " md:w-1/3 flex flex-row justify-around" >
                <div className=" -mt-9 flex justify-around lg:gap-28 md:gap-20 md:ml-[500px] sm:gap-24 gap-10 lg:ml-[830px]">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#FFFFFF] text-purple-500 flex-shrink-0 hover:bg-[#A57CE6]" style={{boxShadow: '0px 3px 6px #0000006E'}}>
                    <a className="w-10 h-10 ">
                        <img className="mx-auto" src={image11} alt="" />
                    </a>
                </div>

                <div class="w-20 h-20  inline-flex items-center justify-center rounded-full bg-[#FFFFFF] text-purple-500 flex-shrink-0 hover:bg-[#A57CE6]" style={{boxShadow: '0px 3px 6px #0000006E'}}>
                    <a className="w-10 h-10">
                    <Link to='/schedule'>
                        <img className="mx-auto" src={image12} alt="" />
                    </Link>
                    </a>
                </div>

                <div class="w-20 h-20  inline-flex items-center justify-center rounded-full bg-[#FFFFFF] text-purple-500 flex-shrink-0 hover:bg-[#A57CE6]" style={{boxShadow: '0px 3px 6px #0000006E'}}>
                    <a className="w-10 h-10">
                    <Link to='/scheduleSetup'>
                        <img className="mx-auto" src={image13} alt="" />
                    </Link>
                    </a>
                </div>
                </div>
            </div>
            <div>
                <h2 class="text-gray-900 text-center text-3xl title-font font-bold mb-2 mt-6">Your Connected Social Profiles</h2>
                <p class="leading-relaxed text-base text-center">Connect New Social Profiles or Manage your existing profiles to this workspace.</p>
            </div>

            <div className="bg-[#FFFFFF] flex flex-col mt-9 rounded rounded-tl-[100px] rounded-tr-[100px] lg:px-32 w-full">
            <div className="flex flex-row lg:gap-4 gap-2">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center" src={image14} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#5273DB] border-0 py-2 px-4 md:px-6 lg:px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Profile</button>
             </div>
             <div className="mt-12 lg:ml-16">
             <button class=" text-white bg-[#5273DB] border-0 py-2 px-4 md:px-6 lg:px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Page</button>
             </div>
             <div className="mt-12 lg:ml-16">
             <button class=" text-white bg-[#5273DB] border-0 py-2 px-4 md:px-6 lg:px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Group</button>
             </div>
             </div>


             <div className="flex flex-row lg:gap-4 gap-2 -mt-5">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center inline-block" src={image15} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#A2468D] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Profile</button>
             </div>
             <div className="mt-12 lg:ml-16">
             <button class=" text-white bg-[#A2468D] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Business</button>
             </div>
            
             </div>


             <div className="flex flex-row lg:gap-4 gap-2 -mt-5">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center inline-block" src={image16} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#5276A8] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Profile</button>
             </div>
             <div className="mt-12 lg:ml-16">
             <button class=" text-white bg-[#5276A8] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Company</button>
             </div>
             </div>


             <div className="flex flex-row gap-4 -mt-5">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center inline-block" src={image17} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#78A4D3] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Profile</button>
             </div>
             </div>



             <div className="flex flex-row gap-4 -mt-5">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center inline-block" src={image18} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#9E443B] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Profile</button>
             </div>
             </div>



             <div className="flex flex-row gap-4 -mt-5">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center inline-block" src={image19} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#000000] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Profile</button>
             </div>
             </div>



             <div className="flex flex-row gap-4 -mt-5">
            <img alt="testimonial" class=" mt-10 w-16 h-16 mb-8 object-cover object-center inline-block" src={image20} />
            <div className="mt-12 lg:ml-16">
            <button class=" text-white bg-[#D74532] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded rounded-full text-lg">Company</button>
             </div>
             </div>
             <div className=" flex justify-end w-full">
            <Link to='/contentcategory' class="btn btn-lg lg:btn-lg w-[200px] inline-flex text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Next</Link>
            </div>
            </div>









            <div className="flex flex-row gap-20 ml-5 font-bold">
            
            </div>






            <div class="container w-full py-24 mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">


                </div>
            </div>
        </section>







    </section>

};

export default Onboarding;