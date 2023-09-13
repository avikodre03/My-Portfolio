import React from 'react'
import './Web.css'
import { GoProjectSymlink } from 'react-icons/go';
import { FaLaptopCode } from 'react-icons/fa';

import { IoIosContact } from 'react-icons/io';
const Web = () => {
  return (
    <div className="web">
      
    <div className='web-options'>
      <a href='#Projects'>
      <GoProjectSymlink/>  Projects
      </a>
    </div>
    <div className='web-options'>
      <a href='#Skills'>
       <FaLaptopCode/> Skills
      </a>
    </div>
    <div className='web-options'>
      <a href='#Contact'>
      <IoIosContact style={{fontSize:"26px"}}/>  Contact
      </a>
    </div>
    </div>
  )
}

export default Web