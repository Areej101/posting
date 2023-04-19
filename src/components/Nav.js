import React from 'react';
//import data
import {nav} from '../data'
//import icons
import {Link } from "react-router-dom";

const Nav = () => {
  return <nav>
    <ul className='flex  gap-x-6'>
        {nav.map((item, index) => {
            //destructure item 
            const {to, name} = item;
            return (
                <li key={index}>
                    <Link className='hover:text transition text-white' to={to}>
                        {name}
                    </Link>
                </li>
            );
        })}
    </ul>
  </nav>;
};

export default Nav;
