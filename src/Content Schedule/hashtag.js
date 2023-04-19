import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Link } from "react-router-dom";




const Hashtag = () => {
    const { logo, text} = onboarding;
    const {bell, user,link,file,edit,calendar,graph,hashtag} = schedule;
    const [open, setOpen] = useState(false);
    const Menus = ["User Management"];
    const Menus2 = ["Profile Settings"];
    return <section>
        <header class="text-gray-600 body-font bg-[#A57CE6]">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className=" h-9" alt="" />
          <span class="ml-1 text-white text-xl">Automation Post</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 text-white text-3xl font-bold">Hashtag</a>
          
        </nav>
        <button class="inline-flex items-center gap-1 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <img src={bell} alt="" />
          <img onClick={()=> setOpen(!open)} src={user} alt="" />
          {
                        open &&
                        <div className="bg-white p-[1] w-45 shadow-lg absolute top-12 right-5 md:mt-0">
                            <ul className="text-black">
                                {Menus.map((menu) => (
                                    <Link to='/userManagement'>
                                    <li onClick={()=> setOpen(false)} className="p-2 text-sm cursor-pointer rounded hover:bg-[#A57CE6]" key={menu}>{menu}</li>
                                    </Link>
                                ))}
                                {Menus2.map((menu) => (
                                    <Link to='/profileSetting'> 
                                     <li onClick={()=> setOpen(false)} className="p-2 text-sm cursor-pointer rounded hover:bg-[#A57CE6]" key={menu}>{menu}</li>
                                     </Link>
                                ))
                                }

                            </ul>
                        </div>
                    }
        </button>
      </div>
    </header>

    <div class="container  px-0 min-w-full flex flex-wrap p-5 flex-col md:flex-row items-center justify-normal bg-[#EFEFEF]">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center bg-[#EFEFEF]">
          <a class="mr-5 text-white text-3xl font-bold">
            <Link to='/importlink'>
            <img src={link} />
            </Link>
          </a>

          <a class="mr-5 text-white text-3xl font-bold">
            <Link to='/importcsv'>
            <img src={file} />
            </Link>
          </a>

          <a class="mr-5 text-white text-3xl font-bold">
            <Link to='/overview'>
            <img src={edit} />
            </Link>
          </a>

          <a class="mr-5 text-white text-3xl font-bold">
            <Link to='/analytics'>
            <img src={calendar} />
            </Link>
          </a>


          <a class="mr-5 text-white text-3xl font-bold">
            <Link to='/media'>
            <img src={graph} />
            </Link>
          </a>

          <a class="mr-5 text-white text-3xl font-bold">
            <Link to='/hashtag'>
            <img src={hashtag} />
            </Link>
          </a>
          
        </nav>
    </div>
        <div className="flex flex-row items-center justify-center">
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center  text-gray-500s">
            There are currently no hashtags collections, you can add your own hashtags collections</p>
        </div>
        <div class="flex flex-row items-center justify-center ">
        <button class="flex mx-auto mt-16 text-white bg-[#A57CE6] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded rounded-full text-lg">Create a Hashtag Collection</button>
    </div>
    </section>

};



export default Hashtag;