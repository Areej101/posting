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
    <header class="text-gray-600 body-font bg-[#A57CE6]">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className=" h-9" alt="" />
          <span class="ml-1 text-white text-xl">Automation Post</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 text-white text-3xl font-bold">Content Schedule</a>
          
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

    

    <div className="flex justify-center">
      <p className="text-center mt-[40px] text-sm">This is how your categories are scheduled. Doesn’t Looks Good? Change it!</p>
     
    </div>
    
    <div className="lg:w-full w-full mx-auto overflow-auto mt-11">
      <table className="a table-auto w-full">
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