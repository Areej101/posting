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
        <header className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#A57CE6]'>
            {/* logo */}
            <a href="# " className='flex sm:mb-3'>
                <img src={logo} className='mx-[70px] h-[25px] mt-[-5px]' alt="" />
                <span className='font-bold text-white mt-[-5px] mx-[-60px]'>{text}</span>
            </a>
            <div className='flex justify-center mt-[-40px] text-white w-full'>
                <span className='font-bold text-[30px] mx-[400px]'>Content categories</span>
                {/* <button className="mx-[-420px] btn btn-md md:btn-md btn-[#A57CE6] bg-[#A57CE6]"><span className=''></span></button> */}
                <div className="flex gap-[20px] mx-[20px]">
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
            <button class="mx-[500px] bg-[#A57CE6] w-[300px] hover:bg-blue-700 text-white  py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                <img className="" src={editting} alt="" /> Content categories
            </button>
        </div>
        {/** boxesss */}
        <div className="justify-center gap-[30px] mt-[30px] grid grid-cols-3 gap-[10px] ml-[100px]">
            {/**first box */}
            <div className="bg-[#EFEFEF] w-[260px] h-[200px] text-center rounded-[30px]">
                <div className="bg-[black] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px]">Content without a category</div>
                <div className="text-[10px] font-bold mt-[5px]">Content that hasnt been saved in a category
                    <p className="text-[20px] mt-[10px] ">Active</p></div>
                <div className="grid grid-cols-2 divide-x mt-[15px] h">
                    <div className="h-[83px] text-[13px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-[10px]" src={send} alt=" " />View Posts</div>
                    <div className="text-[13px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] mt-[10px]" src={edit1} alt=" " /> Bulk Editor</div>
                </div>
            </div>
            {/** second box */}
            <div className="bg-[#EFEFEF] w-[260px] h-[200px] text-center rounded-[30px]">
                <div className="bg-[black] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px]">Curated</div>
                <div className="text-[8px] font-bold mt-[5px]">Add third party content you find, or connect some RSS feeds.
                    <p className="text-[20px] mt-[10px] ">Active</p></div>
                <div className="grid grid-cols-3 divide-x mt-[15px] h">
                    <div className="h-[83px] text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[30px] mt-[10px]" src={send} alt=" " /> View Posts</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={setting} alt=" " /> Edit Category</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={edit1} alt=" " /> Bulk Editor</div>
                </div>
            </div>

            {/**third box */}
            <div className="bg-[#EFEFEF] w-[260px] h-[200px] text-center rounded-[30px]">
                <div className="bg-[black] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px]">Engaging Posts</div>
                <div className="text-[8px] font-bold mt-[5px]">Add third party content you find, or connect some RSS feeds.
                    <p className="text-[20px] mt-[10px] "></p></div>
                <div className="grid grid-cols-3 divide-x mt-[25px] h">
                    <div className="h-[110px] text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[30px] mt-[10px]" src={send} alt=" " /> View Posts</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={setting} alt=" " /> Edit Category</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={edit1} alt=" " /> Bulk Editor</div>
                </div>
            </div>

            {/** fourth box */}
            <div className="bg-[#EFEFEF] w-[260px] h-[200px] text-center rounded-[30px]">
                <div className="bg-[black] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px]">Promotional</div>
                <div className="text-[8px] font-bold mt-[5px]">Add third party content you find, or connect some RSS feeds.
                    <p className="text-[20px] mt-[10px] "></p></div>
                <div className="grid grid-cols-3 divide-x mt-[25px] h">
                    <div className="h-[110px] text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[30px] mt-[10px]" src={send} alt=" " /> View Posts</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={setting} alt=" " /> Edit Category</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={edit1} alt=" " /> Bulk Editor</div>
                </div>
            </div>

            {/**fifth box */}
            <div className="bg-[#EFEFEF] w-[260px] h-[200px] text-center rounded-[30px]">
                <div className="bg-[black] text-white text-sm h-[30px] text-center rounded-tl-[40px] rounded-tr-[40px]">Our Blogs & Videos</div>
                <div className="text-[8px] font-bold mt-[5px]">Add third party content you find, or connect some RSS feeds.
                    <p className="text-[20px] mt-[10px] "></p></div>
                <div className="grid grid-cols-3 divide-x mt-[25px] h">
                    <div className="h-[110px] text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderRight: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[30px] mt-[10px]" src={send} alt=" " /> View Posts</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={setting} alt=" " /> Edit Category</div>
                    <div className="text-[10px] font-bold" style={{ borderTop: '1px solid #B7B7B7', borderLeft: '1px solid #B7B7B7' }}><img className="h-[25px] ml-[50px] ml-[30px] mt-[10px]" src={edit1} alt=" " /> Bulk Editor</div>
                </div>
            </div>
        </div>

        <div>
            <Link to='/scheduleSetup' className='btn btn-lg lg:btn-lg rounded rounded-none bg-[#A57CE6] lg:gap-x-4 w-[200px] mx-[990px] mt-[-50px] text-white drop-shadow-2xl'>Next</Link>
        </div>
    </section>

};



export default ContentCategories;