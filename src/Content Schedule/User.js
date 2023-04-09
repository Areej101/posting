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
        <header className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#A57CE6]'>
            {/* logo */}
            <a href="# " className='flex sm:mb-3'>
                <img src={logo} className='mx-[70px] h-[25px] mt-[-5px]' alt="" />
                <span className='font-bold text-white mt-[-5px] mx-[-60px]'>{text}</span>
            </a>
            <div className='flex justify-center mt-[-40px] text-white w-full'>
                <span className='font-bold text-[30px] mx-[400px]'>User Management</span>
                {/* <button className="mx-[-420px] btn btn-md md:btn-md btn-[#A57CE6] bg-[#A57CE6]"><span className=''></span></button> */}
                <div className="flex gap-[10px] mx-[20px]">
                    <img className="h-[30px]" src={bell} alt="" />
                    <div className="relaive">
                        <img onClick={() => setOpen(!open)} className="h-[30px]" src={user} alt="" />
                    </div>
                    {
                        open &&
                        <div className="bg-white p-[1] w-45 shadow-lg absolute top-12 right-5">
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
                </div>
            </div>
        </header>

        <div className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#EFEFEF] flex justify-center gap-[60px]'>
            <p className="font-bold text-[22px] mr-[990px]">User</p>
            <p className="font-bold text-[22px]">Role</p>
        </div>
        <div className="mt-[-5px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex justify-center">
            <p className="text-[17px] mr-[920px]">Usersample@gmail.com</p>
            <p className=" text-[17px]">Admin</p>
        </div>
        <hr />
        <div className="mt-[-5px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex justify-center">
            <p className=" text-[17px] mr-[920px]">User2sample@gmail.com</p>
            <p className=" text-[17px]">Manager</p>
        </div>
        <hr />
        <div class="flex flex-row items-center justify-center mt-[30px]">
            <button class="mx-[530px] bg-[#A57CE6] w-[300px]  hover:bg-blue-700 text-white py-2 px-4 btn rounded-[30px] focus:outline-none focus:shadow-outline" type="button">
                Add a New User
            </button>
        </div>
                

                {/** tablee */}
                <div className="mt-[50px]">
        <table className="]">
        <thead>
          <tr className="">
            <th colSpan={3} className="w-[200px] text-left">Permissions</th>
            <th className="w-[100px]">Manager</th>
            <th className="w-[100px]">Contributor</th>
            <th className="w-[100px]">Publisher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="font-bold">Manage Account</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">No</td>
            <td className="font-bold text-center">No</td>
          </tr>
          <tr>
            <td colSpan={3} className="font-bold">Publish & Edit (Posts & Schedule)</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">No</td>
          </tr>
          <tr>
            <td colSpan={3} className="font-bold">Create(not approved) Content</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">Yes</td>
          </tr>
          <tr>
            <td colSpan={3} className="font-bold">View Posts & Analyics</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">Yes</td>
            <td className="font-bold text-center">Yes</td>
          </tr>
          
        </tbody>
      </table>
        </div>
    </section>
}

export default User;