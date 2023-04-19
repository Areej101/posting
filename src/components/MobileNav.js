import React from 'react';
//import data
import {nav} from '../data'
import {Link } from "react-router-dom";

const MobileNav = () => {
  return <div className='bg-purple/95 w-full h-full'>
    <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, index) => {
            //destructure
            const {to, name} = item;
            return <li key={index}>
              <Link>
                <a className='link text-white text-xl' to={to}>
                    {name}
                </a>
              </Link>
            </li>
        })}

    </ul>
  </div>;
};

export default MobileNav;
