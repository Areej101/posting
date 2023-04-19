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
        <header class="text-gray-600 body-font bg-[#A57CE6]">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} className=" h-9" alt="" />
                    <span class="ml-1 text-white text-xl">Automation Post</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 text-white text-3xl font-bold">Create Post</a>

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

        <div class="container px-5 py-24 mx-auto flex flex-wrap bg-[#EFEFEF] mt-8 rounded rounded-tl-[90px] rounded-tr-[90px]">
            <div class="flex w-full mb-20 flex-wrap">
                <h1 class="sm:text-3xl text-2xl title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 font-bold -mt-12">Create your Post</h1>
                <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base flex justify-end -mt-12"> <XMarkIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" /></p>
            </div>


            <div className="w-full flex justify-center">
                <Menu as="div" className="relative inline-block text-left">
                    <div className="">
                        <Menu.Button className=" inline-flex w-[250px] justify-center gap-x-1.5 rounded-full bg-[#ffffff] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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


            <div class=" container px-5 py-24 mx-auto flex bg-white mt-8 rounded rounded-tl-[90px] rounded-tr-[90px] rounded-bl-[90px] rounded-br-[90px] ">
                <div class="flex w-full mb-20 flex-wrap">
                    <p class="leading-relaxed -mt-20 px-8 text-[#B9B9B9]  text-base flex justify-start">How are you feeling?</p>
                </div>
            </div>

            <div className="flex justify-end gap-5 w-full">
                <button class="inline-flex mt-6  text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Add Variation</button>
                <button class="inline-flex mt-6 text-white bg-[#A57CE6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Customise for each profile</button>
            </div>

            <div className='flex w-full justify-center gap-7 mt-5'>
                <Menu>
                    <Menu.Button className=" font-bold inline-flex w-[150px] justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm text-gray-900 shadow-sm hover:bg-gray-50">
                        Category
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </Menu>

                <h2 class="text-gray-900 text-lg text-left title-font font-medium mb-10 underline underline-offset-1">or continue without Category</h2>
            </div>

            <div className="flex w-full justify-center mt-12">
                <button class="bg-[#A57CE6] w-[200px]  hover:bg-blue-700 text-white font-bold py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                    Publish
                </button>
            </div>
            <div className="flex w-full justify-center mt-3">
            <Link to='/scheduleSetup'>
                <p className=" text-center underline underline-offset-1 mt-[20px]">Or Schedule it</p>
            </Link>
            </div>
        </div>







    </section>
};



export default CreatePost;