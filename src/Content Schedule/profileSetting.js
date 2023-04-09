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
        <header className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#A57CE6]'>
            {/* logo */}
            <a href="# " className='flex sm:mb-3'>
                <img src={logo} className='mx-[70px] h-[25px] mt-[-5px]' alt="" />
                <span className='font-bold text-white mt-[-5px] mx-[-60px]'>{text}</span>
            </a>
            <div className='flex justify-center mt-[-40px] text-white w-full'>
                <span className='font-bold text-[30px] mx-[400px]'>Profile Setting</span>
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
            <p className="font-bold text-[22px] mr-[990px]">Action</p>
            <p className="font-bold text-[22px]">Status</p>
        </div>
        <hr />
        <div className="mt-[-5px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">I want the time to be formatted in an AM/PM format instead of 24-Hour Format</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-5px]" />
        <div className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#EFEFEF] flex justify-center gap-[60px]'>
            <p className="font-bold text-[22px] mr-[990px]">Notificaion Setting</p>
        </div>
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when an item fails to post</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '930px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when the import is complete</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '915px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when the bulk edit is complete</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '905px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when a content category becomes empty</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '840px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when a content category is getting close to reaching the maximum number of items</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '580px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when an RSS feed fails to be retrieved (and paused)</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '770px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me weekly with an analytics report</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '910px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me about comments on posts I follow or when I’m mentioned</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '750px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">Email me when an item is marked as pending and needs to be published via reminders</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '630px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />

        <div className='py-6 lg:py-4 w-full h-[60px] transition-all z-10 bg-[#EFEFEF] flex justify-center gap-[60px]'>
            <p className="font-bold text-[22px] mr-[990px]">Consents</p>
        </div>
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">App Cookie Consent. Learn More</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '950px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />
        <div className="mt-[-10px] py-6 lg:py-4 w-full h-[60px] transition-all z-10 flex">
            <p className=" text-sm ml-[10px]">I consent to receive information about services and special offers by email</p>
            <input
                checked={ison}
                onChange={handleToggle}
                className="react-switch-checkbox"
                style={{marginLeft: '700px'}}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: ison && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        <hr className="mt-[-15px]" />

    </section>
}

export default ProfileSetting;