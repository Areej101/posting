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
  const { bell, user, link, file, edit, calendar, graph, hashtag, image, multimedia } = schedule;
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
          <a class="mr-5 text-white text-3xl font-bold">Import Media</a>

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
    <div>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center font-bold text-gray-500s">Select Your Social Media Profiles you want to share on.</p>        </div>

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
    <div class="flex flex-row items-center justify-center">
      <button class="flex mx-auto mt-16 text-white bg-[#A57CE6] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded rounded-full text-lg">
        <img src={image} />Import Media</button>
    </div>

    <div className="flex-grow">
      <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3 underline underline-offset-1">Advanced</h2>
    </div>

    <div className='flex justify-center gap-[40px]'>
      <Menu>
        <Menu.Button className=" mt-[20px] font-bold inline-flex w-[150px] justify-center gap-x-1.5 rounded-full bg-[#EFEFEF] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
          Category
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </Menu>
      <h2 class="text-gray-900 text-lg text-left title-font font-medium mb-10 underline underline-offset-1">or continue without Category</h2>
    </div>
    <div class="flex flex-row items-center justify-center">
      <button class="flex mx-auto mt-16 text-white bg-[#A57CE6] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded rounded-full text-lg">Import</button>

    </div>
  </section>
};

export default Media;