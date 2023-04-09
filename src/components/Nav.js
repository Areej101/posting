import React from 'react';
//import data
import {nav} from '../data'
//import icons

const Nav = () => {
  return <nav>
    <ul className='flex  gap-x-6'>
        {nav.map((item, index) => {
            //destructure item 
            const {href, name} = item;
            return (
                <li key={index}>
                    <a className='hover:text transition text-white' href={href}>
                        {name}
                    </a>
                </li>
            );
        })}
    </ul>
  </nav>;
};

export default Nav;
