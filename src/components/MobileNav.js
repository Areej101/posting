import React from 'react';
//import data
import { nav } from '../data'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { header } from '../data';

const MobileNav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/signin")
  }

  const {btnText} = header;
  return <div className='bg-purple/95 w-full h-full'>
    <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
      {nav.map((item, index) => {
        //destructure
        const { to, name } = item;
        return <li key={index}>
            <Link className='link text-white text-xl' to={to}>
              {name}
            </Link>

        </li>
      })}
      <li>
      <a className=''>
      <button onClick={handleClick} className='btn btn-md md:btn-md btn-[#A57CE6] btn-outline bg-[#A57CE6] text-white text-sm'>
            {btnText}
      </button>
      </a>
      </li>

    </ul>
  </div>;
};

export default MobileNav;
