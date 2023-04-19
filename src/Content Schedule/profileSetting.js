import React, { useState } from "react";
import { onboarding } from "../data";
import { schedule } from "../data";
import { Link } from "react-router-dom";
import './profile.css';
import { Switch } from "@headlessui/react";


const ProfileSetting = ({ ison, handleToggle }) => {
    const [value, setValue] = useState(false);
    const { logo, text } = onboarding;
    const { bell, user, link, file, edit, calendar, graph, hashtag, plus, quotation } = schedule;
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
                    <a class="mr-5 text-white text-3xl font-bold">Profile Setting</a>

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
                    <p>Action</p>
                </a>

                <a class="text-black text-3xl font-bold">
                    <p className="text-right -mt-8">Status</p>
                </a>
        </div>

        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-7">I want the time to be formatted in an AM/PM format instead of 24-Hour Format</h1>
        </div>

        <div class="container px-12 min-w-full p-5 flex-col md:flex-row bg-[#EFEFEF]">
                <a class="text-black text-3xl font-bold">
                    <p>Notification Setting</p>
                </a>
        </div>

        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when an item fails to post.</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when the import is complete</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when the bulk edit is complete</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when a content category becomes empty</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when a content category is getting close to reaching the maximum number of items</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when an RSS feed fails to be retrieved (and paused)</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me weekly with an analytics report</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me about comments on posts I follow or when I’m mentioned</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">Email me when an item is marked as pending and needs to be published via reminders</h1>
        </div>


        <div class="container px-12 min-w-full p-5 flex-col md:flex-row bg-[#EFEFEF]">
                <a class="text-black text-3xl font-bold">
                    <p>Consents</p>
                </a>
        </div>

        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">App Cookie Consent. Learn More</h1>
        </div>
        <hr />
        <div className="px-10">
        <h1 class="title-font sm:text-sm text-sm mb-4 font-medium text-gray-900 mt-3">I consent to receive information about services and special offers by email</h1>
        </div>










    </section>
}

export default ProfileSetting;