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
          <a class="mr-5 text-white text-3xl font-bold">Content Categories</a>
          
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