import React from 'react'
import "./Mobile.css"
import { RxCrossCircled } from 'react-icons/rx';
import { GoProjectSymlink } from 'react-icons/go';
import { FaLaptopCode } from 'react-icons/fa';

import { IoIosContact } from 'react-icons/io';
const Mobile = ({isOpen,setIsOpen}) => {
  return (
    <div className='Mobile'>
      <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>

      <RxCrossCircled/>
      </div>
      <div className="mobile-options">
           
    <div className='mobile-option'>
      <a href='#Projects'>
      <GoProjectSymlink/>  Projects
      </a>
    </div>
    <div className='mobile-option'>
      <a href='#Skills'>
       <FaLaptopCode/> Skills
      </a>
    </div>
    <div className='mobile-option'>
      <a href='#Contact'>
      <IoIosContact />  Contact
      </a>
    </div>
      </div>
    </div>
  )
}

export default Mobile
