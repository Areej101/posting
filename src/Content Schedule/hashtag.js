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
        <header className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#A57CE6]'>
            {/* logo */}
            <a href="# " className='flex sm:mb-3'>
                <img src={logo} className='mx-[70px] h-[25px] mt-[-5px]' alt="" />
                <span className='font-bold text-white mt-[-5px] mx-[-60px]'>{text}</span>
            </a>
            <div className='flex justify-center mt-[-40px] text-white w-full'>
            <span className='font-bold text-[30px] mx-[400px]'>Hashtag Collections</span>
           {/* <button className="mx-[-420px] btn btn-md md:btn-md btn-[#A57CE6] bg-[#A57CE6]"><span className=''></span></button> */}
            <div className="flex gap-[10px] mx-[20px]">
                <img className="h-[30px]" src={bell} alt="" />
                <div className="relaive">
                        <img onClick={()=> setOpen(!open)} className="h-[30px]" src={user} alt="" />
                    </div>
                    {
                        open &&
                        <div className="bg-white p-[1] w-45 shadow-lg absolute top-12 right-5">
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
            </div>
            </div>
        </header>
        <div className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#EFEFEF] flex justify-center  gap-[60px]'>
        <div>
            <Link to='/importlink'><img className="" src={link} alt="" /></Link>
            </div>

            <div>
           <Link to='/importcsv'><img className="" src={file} alt="" /></Link>
            </div>

            <div>
            <Link to='/overview'><img className="" src={edit} alt="" /></Link>
            </div>

            <div>
            <Link to='/analytics'><img className="" src={calendar} alt="" /></Link>
            </div>

            <div>
            <Link to='/media'><img className="" src={graph} alt="" /></Link>
            </div>

            <div>
            <Link to='/hashtag'><img className="" src={hashtag} alt="" /></Link>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-[150px]">
            <p>There are currently no hashtags collections, you can add your own hashtags collections</p>
        </div>
        <div class="flex flex-row items-center justify-center mt-[30px] w-full">
      <button class="mx-[530px] bg-[#A57CE6] w-[500px] hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
        Create a Hashtag Collection
      </button>
    </div>
    </section>

};



export default Hashtag;