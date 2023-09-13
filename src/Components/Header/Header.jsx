import React, { useState } from 'react'
import './Header.css'
import Web from './Web/Web'
import Mobile from './Mobile/Mobile'
import { RiAppsFill } from 'react-icons/ri';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='Header'>
      <div className="logo">Portfolio</div>
      <div className="rightSectionMenu">
        <div className="web-menu">
          <Web />
        </div>
        
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <RiAppsFill className='menu-icon' />
          </div>

          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Header