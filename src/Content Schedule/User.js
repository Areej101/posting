import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Link } from "react-router-dom";
import './user.css';
const User = () => {
    const { logo, text } = onboarding;
    const { bell, user, link, file, edit, calendar, graph, hashtag, plus, quotation } = schedule;
    const [open, setOpen] = useState(false);
    const Menus = ["User Management"];
    const Menus2 = ["Profile Settings"];
    return <section >
        <header class="text-gray-600 body-font bg-[#A57CE6]">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} className=" h-9" alt="" />
                    <span class="ml-1 text-white text-xl">Automation Post</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 text-white text-3xl font-bold">User Management</a>

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


        <div class="container px-14 min-w-full p-5 flex-col md:flex-row bg-[#EFEFEF]">
                <a class="text-black text-3xl font-bold">
                    <p>User</p>
                </a>

                <a class="text-black text-3xl font-bold">
                    <p className="text-right -mt-8">Role</p>
                </a>

        </div>
         
         {/** users */}
        <div className="px-14">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-7">User1sample@gmail.com</h1>
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 text-right -mt-7" >Admin</h1>
        </div>
        <hr />

        <div className="px-14">
        <h1 class="title-font  sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-7">User2sample@gmail.com</h1>
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 text-right -mt-7" >Manager</h1>
        </div>



        {/*** tableeeeeeeeeeee */}
        <div class="lg:w-2/3 w-full mx-auto overflow-auto mt-20">
            <table class="table-auto w-full text-left ">
                <thead>
                    <tr>
                        <th colSpan={4} class="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-lg">Permissions</th>
                        <th class="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-lg text-center">Manager</th>
                        <th class="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-lg text-center ">Contributor</th>
                        <th class="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-lg text-center">Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={4} class="px-4 py-3 font-bold">Manage Account</td>
                        <td class="px-4 py-3 text-center font-bold">Yes</td>
                        <td class="px-4 py-3 text-center font-bold">No</td>
                        <td class="px-4 py-3 text-gray-900 text-center font-bold">No</td>
                    </tr>
                    <tr>
                        <td colSpan={4} class="border-t-1 border-black-200 px-4 py-3 font-bold">Publish & Edit (Posts & Schedule)</td>
                        <td class="border-t-1 border-black-200 px-4 py-3 text-center font-bold">Yes</td>
                        <td class="border-t-1 border-black-200 px-4 py-3 text-center font-bold">Yes</td>
                        <td class="border-t-1 border-black-200 px-4 py-3 text-gray-900 text-center font-bold">No</td>
                    </tr>
                    <tr>
                        <td colSpan={4} class="border-t-1 border-black-200 px-4 py-3 font-bold">Create(not approved) Content</td>
                        <td class="border-t-1 border-black-200 px-4 py-3 text-center font-bold">Yes</td>
                        <td class="border-t-1 border-black-200 px-4 py-3 text-center font-bold">Yes</td>
                        <td class="border-t-1 border-black-200 px-4 py-3 text-gray-900 text-center font-bold">Yes</td>
                    </tr>
                    <tr>
                        <td colSpan={4} class="border-t-1 border-b-1 border-black-200 px-4 py-3 font-bold">View Posts & Analyics</td>
                        <td class="border-t-1 border-b-1 border-black-200 px-4 py-3 text-center font-bold">Yes</td>
                        <td class="border-t-1 border-b-1 border-black-200 px-4 py-3 text-center font-bold">Yes</td>
                        <td class="border-t-1 border-b-1 border-black-200 px-4 py-3 text-center font-bold text-gray-900">Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>









       
    </section>
}

export default User;