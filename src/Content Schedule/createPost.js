import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";




const CreatePost = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
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
                <span className='font-bold text-[30px] mx-[400px]'>Create Post</span>
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

        <div className='bg-[#EFEFEF] mt-[50px] h-[690px] rounded rounded-tl-[100px] rounded-tr-[100px] ml-[10px] mr-[10px]'>
            <p className="ml-[90px] text-[#EFEFEF]">hcbhdb</p>
            <div className="flex">
                <p className="font-bold ml-[50px] mt-[2px] text-[25px]">Create  your Post</p>
                <XMarkIcon className="-mr-1 h-5 w-5 text-black mt-[6px] ml-[950px]" aria-hidden="true" />
            </div>
            <div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="mx-[500px] mt-[20px] inline-flex w-[250px] justify-center gap-x-1.5 rounded-full bg-[#ffffff] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
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

            <div className="bg-[#ffffff] mt-[30px] h-[250px] w-[1100px] ml-[80px] rounded rounded-tl-[70px] rounded-tr-[70px] rounded rounded-bl-[70px] rounded-br-[70px]">
                <div>
                    <p className=" ml-[50px] text-white ">hdbchdbh</p>
                    <p className="text-[#B9B9B9] ml-[40px] mb-[30px]">How are you feeling today?</p>
                </div>
            </div>
            <div className="mt-[20px] ml-[680px]">
                <div class="flex flex-row gap-[20px]">
                    <button class="bg-[#A57CE6]  w-[180px] hover:bg-blue-700 text-white font-bold py-2 px-4 btn btn-md md:btn-md rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                        Add Variation
                    </button>
                    <button class="bg-[#A57CE6] text-[10px] w-[280px] hover:bg-blue-700 text-white py-2 px-4 btn btn-md md:btn-md rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                        Customise for each profile
                    </button>
                </div>
            </div>

            <div>
                <div className='flex justify-center gap-[60px] mt-[60px]'>
                    <Menu>
                        <Menu.Button className="font-bold inline-flex w-[150px] justify-center gap-x-1.5 rounded-full bg-[#ffffff] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
                            Category
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </Menu>
                    <p className=" underline underline-offset-1">or continue without Category</p>
                </div>
                <div class="flex flex-row items-center justify-center mt-[30px]">
                    <button class="bg-[#A57CE6] w-[200px]  hover:bg-blue-700 text-white font-bold py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                        Publish
                    </button>
                </div>
                <Link to='/scheduleSetup'>
                    <p className=" text-center underline underline-offset-1 mt-[20px]">Or Schedule it</p>
                </Link>

            </div>
        </div>
    </section>
};



export default CreatePost;