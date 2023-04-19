import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import './contentCate.css'
import { Col } from "react-bootstrap";
import { Stack } from 'react-stack';
import { Link } from "react-router-dom";



const ContentCategories = () => {
    const { logo, text } = onboarding;
    const { bell, user, link, file, edit, calendar, graph, hashtag, editting, edit1, send, setting } = schedule;
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
                    <a class="lg:mr-14 mr-5 text-white text-3xl font-bold">Content Categories</a>

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
            <Link to='/createPost' class="flex mx-auto mt-12 text-white bg-[#A57CE6] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded rounded-full text-lg">
                <img src={editting} />Content categories</Link>
        </div>


        {/** boxesss */}
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -mx-4 -my-8">

                    <div class="py-8 px-4 lg:w-1/3">
                        <div class="h-full flex items-start">
                            <div class="flex-grow bg-[#EFEFEF] rounded rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                <h2 class="tracking-widest text-sm text-center title-font font-bold text-white mb-1 h-7 rounded rounded-tl-3xl rounded-tr-3xl bg-black w-full">Content without a category</h2>
                                <h1 class="title-font text-sm font-medium text-gray-900 text-center mt-3 mb-3">Content that hasn’t been saved in a category</h1>
                                <p class="leading-relaxed mb-5 font-bold text-center text-black">Active</p>
                                <div className="grid grid-cols-2 divide-x text-center text-black">
                                    <p className="h-36" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[70px] mt-10" src={send} alt=" " />View Posts</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[70px] mt-10" src={edit1} alt=" " />Bulk Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-8 px-4 lg:w-1/3">
                        <div class="h-full flex items-start">
                            <div class="flex-grow bg-[#EFEFEF] rounded rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                <h2 class="tracking-widest text-sm text-center title-font font-bold text-white mb-1 h-7 rounded rounded-tl-3xl rounded-tr-3xl bg-black w-full">Curated</h2>
                                <h1 class="title-font text-xs font-medium text-gray-900 text-center mt-3 mb-3">Add 3rd party content you find, or connect some RSS Feeds.</h1>
                                <p class="leading-relaxed mb-5 font-bold text-center text-black">Active</p>
                                <div className="grid grid-cols-3 divide-x text-center text-black">
                                    <p className=" h-36" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={send} alt=" " />View Posts</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={setting} alt=" " />Edit Category</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={edit1} alt=" " />Bulk Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="py-8 px-4 lg:w-1/3">
                        <div class="h-full flex items-start">
                            <div class="flex-grow bg-[#EFEFEF] rounded rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                <h2 class="tracking-widest text-sm text-center title-font font-bold text-white mb-1 h-7 rounded rounded-tl-3xl rounded-tr-3xl bg-black w-full">Engaging Posts</h2>
                                <h1 class="title-font text-sm font-medium text-gray-900 text-center mt-3 mb-3">Content that hasn’t been saved in a category</h1>
                                <p class="leading-relaxed mb-5 font-bold text-center text-[#EFEFEF]">Active</p>
                                <div className="grid grid-cols-3 divide-x text-center text-black">
                                    <p className="h-36" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={send} alt=" " />View Posts</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={setting} alt=" " />Edit Category</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={edit1} alt=" " />Bulk Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="py-8 px-4 lg:w-1/3">
                        <div class="h-full flex items-start">
                            <div class="flex-grow bg-[#EFEFEF] rounded rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                <h2 class="tracking-widest text-sm text-center title-font font-bold text-white mb-1 h-7 rounded rounded-tl-3xl rounded-tr-3xl bg-black w-full">Promotional</h2>
                                <h1 class="title-font text-sm font-medium text-gray-900 text-center mt-3 mb-3">Content that hasn’t been saved in a category</h1>
                                <p class="leading-relaxed mb-5 font-bold text-center text-[#EFEFEF]">Active</p>
                                <div className="grid grid-cols-3 divide-x text-center text-black">
                                    <p className="h-36" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={send} alt=" " />View Posts</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={setting} alt=" " />Edit Category</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={edit1} alt=" " />Bulk Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="py-8 px-4 lg:w-1/3">
                        <div class="h-full flex items-start">
                            <div class="flex-grow bg-[#EFEFEF] rounded rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                <h2 class="tracking-widest text-sm text-center title-font font-bold text-white mb-1 h-7 rounded rounded-tl-3xl rounded-tr-3xl bg-black w-full">Our Blogs & Videos</h2>
                                <h1 class="title-font text-sm font-medium text-gray-900 text-center mt-3 mb-3">Content that hasn’t been saved in a category</h1>
                                <p class="leading-relaxed mb-5 font-bold text-center text-[#EFEFEF]">Active</p>
                                <div className="grid grid-cols-3 divide-x text-center text-black">
                                    <p className="h-36" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={send} alt=" " />View Posts</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={setting} alt=" " />Edit Category</p>
                                    <p className="" style={{ borderTop: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-10" src={edit1} alt=" " />Bulk Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <div className=" flex justify-end w-full -mt-10 -ml-7">
            <Link to='/scheduleSetup' class="btn btn-lg lg:btn-lg w-[200px] inline-flex text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Next</Link>
            </div>

    </section>

};



export default ContentCategories;