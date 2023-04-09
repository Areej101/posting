import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Link, useNavigate } from 'react-router-dom';
import { Scheduler } from "@devexpress/dx-react-scheduler";
import './contentCate.css';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Schedule = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const { logo, text } = onboarding;
    const { bell, user, link, file, edit, calendar, graph, hashtag } = schedule;
    const [open, setOpen] = useState(false);
    const Menus = ["User Management"];
    const Menus2 = ["Profile Settings"];
    return <section className="">
        <header className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#A57CE6]'>
            {/* logo */}
            <a href="# " className='flex sm:mb-3'>
                <img src={logo} className='mx-[70px] h-[25px] mt-[-5px]' alt="" />
                <span className='font-bold text-white mt-[-5px] mx-[-60px]'>{text}</span>
            </a>
            <div className='flex justify-center mt-[-40px] text-white w-full'>
                <span className='font-bold text-[30px] mx-[400px]'>Content Schedule</span>
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

        <div className="flex justify-center">
            <p className="text-center mt-[40px] text-sm ml-[230px]">This is how your categories are scheduled. Doesn’t Looks Good? Change it!</p>
            <div>
    <Menu as="div" className="relative inline-block text-left">
  <div>
    <Menu.Button className=" mt-[30px] ml-[100px] inline-flex w-[140px] justify-center  rounded-full bg-[#EFEFEF] px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
      Weekly
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
    <Menu.Items className="absolute  right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              {/**put options here */}
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
                            {/**put options here */}

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
                            {/**put options here */}

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
                            {/**put options here */}

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
                            {/**put options here */}

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
                            {/**put options here */}

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
                              {/**put options here */}

              </button>
            )}
          </Menu.Item>
        </form>
      </div>
    </Menu.Items>
  </Transition>
</Menu>
        
    </div>
        </div>
        <div className="mt-[50px]">
        <table className="]">
        <thead>
          <tr className="bg-[#EFEFEF]">
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thrusday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
        </tbody>
      </table>
        </div>



    </section>

}

export default Schedule;