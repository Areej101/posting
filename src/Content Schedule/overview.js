import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from '@heroicons/react/20/solid'


const Overview = () => {
    const { logo, text } = onboarding;
    const { bell, user, link, file, edit, calendar, graph, hashtag, editting, edit1, send, } = schedule;
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
                <span className='font-bold text-[30px] mx-[400px]'>Overview</span>
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

        <div class="flex flex-row items-center justify-center mt-[30px]">
            <Link to='/createPost' class="mx-[500px] bg-[#A57CE6] w-[200px] hover:bg-blue-700 text-white  py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                <img className="" src={editting} alt="" /> Add Post
            </Link>
        </div>

        {/**boxess */}
        <div className="justify-center gap-[30px] mt-[30px] grid grid-cols-3 gap-[10px] ml-[100px]">
            {/** first box */}
            <div className="bg-[#EFEFEF] w-[270px] h-[220px] text-center rounded-[30px]">
                <div className=" flex bg-[#5273DB] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px] "><p className="mt-[4px] ml-[20px]">Facebook</p><p className="text-[11px] mt-[4px] ml-[60px]">@ibake2.0 Business</p></div>
                <div className="text-[20px] font-bold mt-[5px]">Active
                </div>
                <div className="grid grid-cols-1 divide-y mt-[4px] mr-[130px] ml-[15px]">
                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Schedule Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[130px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Next Post
                        <p className="text-[8px] ml-[135px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Notifications
                        <p className="text-[8px] ml-[117px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Posting Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[138px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        More Settings
                        <p className="text-[8px] ml-[110px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>


                </div>
            </div>

            {/** second box */}
            <div className="bg-[#EFEFEF] w-[270px] h-[220px] text-center rounded-[30px]">
                <div className=" flex bg-[#6AA6D7] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px] "><p className="mt-[4px] ml-[20px]">Twitter</p><p className="text-[11px] mt-[4px] ml-[60px]">@ibake2.0 Business</p></div>
                <div className="text-[20px] font-bold mt-[5px]">Active
                </div>
                <div className="grid grid-cols-1 divide-y mt-[4px] mr-[130px] ml-[15px]">
                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Schedule Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[130px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Next Post
                        <p className="text-[8px] ml-[135px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Notifications
                        <p className="text-[8px] ml-[117px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Posting Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[138px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        More Settings
                        <p className="text-[8px] ml-[110px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>


                </div>
            </div>

            {/** third box */}
            <div className="bg-[#EFEFEF] w-[270px] h-[220px] text-center rounded-[30px]">
                <div className=" flex bg-[#D74532] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px] "><p className="mt-[4px] ml-[20px]">Youtube</p><p className="text-[11px] mt-[4px] ml-[60px]">@ibake2.0 Business</p></div>
                <div className="text-[20px] font-bold mt-[5px]">Active
                </div>
                <div className="grid grid-cols-1 divide-y mt-[4px] mr-[130px] ml-[15px]">
                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Schedule Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[130px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Next Post
                        <p className="text-[8px] ml-[135px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Notifications
                        <p className="text-[8px] ml-[117px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Posting Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[138px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        More Settings
                        <p className="text-[8px] ml-[110px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>


                </div>
            </div>

            {/** fourth box */}
            <div className="bg-[#EFEFEF] w-[270px] h-[220px] text-center rounded-[30px]">
                <div className=" flex bg-[#010101] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px] "><p className="mt-[4px] ml-[20px]">Tiktok</p><p className="text-[11px] mt-[4px] ml-[60px]">@ibake2.0 Business</p></div>
                <div className="text-[20px] font-bold mt-[5px]">Active
                </div>
                <div className="grid grid-cols-1 divide-y mt-[4px] mr-[130px] ml-[15px]">
                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Schedule Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[130px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }} >
                        Next Post
                        <p className="text-[8px] ml-[135px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Notifications
                        <p className="text-[8px] ml-[117px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        Posting Setup
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] ml-[138px] text-#000000" aria-hidden="true" />
                    </div>

                    <div className="flex text-[12px] font-bold w-[254px]" style={{ borderTop: '1px solid #B7B7B7' }}>
                        More Settings
                        <p className="text-[8px] ml-[110px]">view all</p>
                        <ChevronRightIcon className="mr-1 h-5 w-5 mt-[5px] text-#000000" aria-hidden="true" />
                    </div>


                </div>
            </div>
        </div>
    </section>

};

export default Overview;