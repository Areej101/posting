import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";


const Media = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const { logo, text } = onboarding;
    const { bell, user, link, file, edit, calendar, graph, hashtag,image,multimedia } = schedule;
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
                <span className='font-bold text-[30px] mx-[400px]'>Import Media</span>
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
        <div className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#EFEFEF] flex justify-center gap-[60px]'>
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
        <div>
            <p className="text-sm font-bold mt-[10px] mx-[450px]">Select Your Social Media Profiles you want to share on.</p>
        </div>

        <div>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="mx-[500px] mt-[20px] inline-flex w-[250px] justify-center gap-x-1.5 rounded-full bg-[#EFEFEF] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
          Select Social Media Account
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mx-[500px] right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Facebook
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Instagram
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Linkedin
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Twitter
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pinterest
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Tiktok
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Youtube
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
            
        </div>
        <div className="bg-[#EFEFEF] mt-[30px] w-[600px] ml-[350px] h-[100px] rounded rounded-full">
            <p className="ml-[50px] text-[#EFEFEF]">bdhbhbd</p>
            <div className="ml-[150px] flex mt-[-10px] gap-[20px]">
                <img className="h-[60px]" src={multimedia} alt="" />
                <p className="mt-[20px]">Drag Photos or Videos</p>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center mt-[20px]">
          <button class="mx-[530px] bg-[#A57CE6] w-[240px] hover:bg-blue-700 text-white font-bold py-2 px-4 btn btn-md md:btn-md rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
            <img src={image} alt="" /> Import Media
          </button>
        </div>
        <p className='mt-[5px] underline underline-offset-1 flex justify-center'>Advanced</p>
        <div className='flex justify-center gap-[40px]'>
        <Menu>
        <Menu.Button className=" mt-[20px] font-bold inline-flex w-[150px] justify-center gap-x-1.5 rounded-full bg-[#EFEFEF] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
          Category
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
        </Menu>
        <p className="mt-[25px] underline underline-offset-1">or continue without Category</p>
        </div>
        <div class="flex flex-row items-center justify-center mt-[30px]">
          <button class="mx-[530px] bg-[#A57CE6] w-[300px]  hover:bg-blue-700 text-white font-bold py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
            Import
          </button>
        </div>
        </section>
};

export default Media;