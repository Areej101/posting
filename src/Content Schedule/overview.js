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
        <header class="text-gray-600 body-font bg-[#A57CE6]">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} className=" h-9" alt="" />
                    <span class="ml-1 text-white text-xl">Automation Post</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 text-white text-3xl font-bold">Overview</a>

                </nav>
                <button class="inline-flex items-center gap-1 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                    <img src={bell} alt="" />
                    <img onClick={() => setOpen(!open)} src={user} alt="" />
                    {
                        open &&
                        <div className="bg-white p-[1] w-45 shadow-lg absolute top-12 right-5 md:mt-0">
                            <ul className="text-black">
                                {Menus.map((menu) => (
                                    <Link to='/userManagement'>
                                        <li onClick={() => setOpen(false)} className="p-2 text-sm cursor-pointer rounded hover:bg-[#A57CE6]" key={menu}>{menu}</li>
                                    </Link>
                                ))}
                                {Menus2.map((menu) => (
                                    <Link to='/profileSetting'>
                                        <li onClick={() => setOpen(false)} className="p-2 text-sm cursor-pointer rounded hover:bg-[#A57CE6]" key={menu}>{menu}</li>
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
        <div class="flex flex-row items-center justify-center">
            <Link to='/createPost' class="flex mx-auto mt-16 text-white bg-[#A57CE6] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded rounded-full text-lg">
                <img src={editting} />Add post</Link>
        </div>

        {/**boxess */}
        <section class="text-gray-600 body-font">
            <div class="container py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {/** first box */}
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-[#EFEFEF] pt-16 pb-24 rounded rounded-tl-3xl  rounded-tr-3xl  rounded-bl-3xl  rounded-br-3xl overflow-hidden text-center relative">
                            <div className="bg-[#5273DB] w-full -mt-16 h-10 ">
                            <h2 class=" text-lg text-left ml-3 title-font font-medium text-white mb-1">Facebook</h2>
                            <p className=" text-sm text-right -mt-7 title-font font-medium mr-2 text-white mb-1">@ibake2.0 (Business)</p>
                            </div>
                            <h2 class=" text-lg title-font font-bold text-black mt-4 mb-1">Active</h2>
                            <div className="grid grid-cols-1 divide-y gap-2">
                                <p className="text-sm text-left ml-3 mt-2">Schedule Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    Next Post 
                                <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" />
                                    </p>
                                <p className="text-sm text-left ml-3">
                                    Notifications
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">Posting Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    More Setings
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                            </div>
                        </div>
                    </div>

                     {/** second box */}
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-[#EFEFEF] pt-16 pb-24 rounded rounded-tl-3xl  rounded-tr-3xl  rounded-bl-3xl  rounded-br-3xl overflow-hidden text-center relative">
                            <div className="bg-[#6AA6D7] w-full -mt-16 h-10 ">
                            <h2 class=" text-lg text-left ml-3 title-font font-medium text-white mb-1">Twitter</h2>
                            <p className=" text-sm text-right -mt-7 title-font font-medium mr-2 text-white mb-1">@ibake2.0 (Business)</p>
                            </div>
                            <h2 class=" text-lg title-font font-bold text-black mt-4 mb-1">Active</h2>
                            <div className="grid grid-cols-1 divide-y gap-2">
                                <p className="text-sm text-left ml-3 mt-2">Schedule Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    Next Post 
                                <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" />
                                    </p>
                                <p className="text-sm text-left ml-3">
                                    Notifications
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">Posting Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    More Setings
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                            </div>
                        </div>
                    </div>

                    {/**third box */}
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-[#EFEFEF] pt-16 pb-24 rounded rounded-tl-3xl  rounded-tr-3xl  rounded-bl-3xl  rounded-br-3xl overflow-hidden text-center relative">
                            <div className="bg-[#D74532] w-full -mt-16 h-10 ">
                            <h2 class=" text-lg text-left ml-3 title-font font-medium text-white mb-1">Youtube</h2>
                            <p className=" text-sm text-right -mt-7 title-font font-medium mr-2 text-white mb-1">@ibake2.0 (Channel)</p>
                            </div>
                            <h2 class=" text-lg title-font font-bold text-black mt-4 mb-1">Active</h2>
                            <div className="grid grid-cols-1 divide-y gap-2">
                                <p className="text-sm text-left ml-3 mt-2">Schedule Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    Next Post 
                                <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" />
                                    </p>
                                <p className="text-sm text-left ml-3">
                                    Notifications
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">Posting Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    More Setings
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                            </div>
                        </div>
                    </div>


                    {/**fourth box */}
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-[#EFEFEF] pt-16 pb-24 rounded rounded-tl-3xl  rounded-tr-3xl  rounded-bl-3xl  rounded-br-3xl overflow-hidden text-center relative">
                            <div className="bg-[#010101] w-full -mt-16 h-10 ">
                            <h2 class=" text-lg text-left ml-3 title-font font-medium text-white mb-1">Tiktok</h2>
                            <p className=" text-sm text-right -mt-7 title-font font-medium mr-2 text-white mb-1">@ibake2.0 (Profile)</p>
                            </div>
                            <h2 class=" text-lg title-font font-bold text-black mt-4 mb-1">Active</h2>
                            <div className="grid grid-cols-1 divide-y gap-2">
                                <p className="text-sm text-left ml-3 mt-2">Schedule Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    Next Post 
                                <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" />
                                    </p>
                                <p className="text-sm text-left ml-3">
                                    Notifications
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">Posting Setup <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                                <p className="text-sm text-left ml-3">
                                    More Setings
                                    <p className=" flex flex-col mr-20 -mt-4 text-xs text-right">
                                    View all</p>
                                    <ChevronRightIcon className=" flex flex-col h-5 w-5 -mt-4 ml-72 text-#000000" aria-hidden="true" /></p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    </section>

};

export default Overview;