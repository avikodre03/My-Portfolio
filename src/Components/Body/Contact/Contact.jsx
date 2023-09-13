import React from 'react'
import './Contact.css'
import Separator from '../../Common/Separator/Separator'
import Social from '../../Common/Social/Social'
import { AiOutlineCloudDownload } from 'react-icons/ai';
const Contact = () => {
  return (
    <div className='Contact'>
       <Separator/>
      <label className='section-title'>Contact</label>
      <div className="contact-container">
        <div className="left-container">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <Social/>
        </div>
        <div className="download-resume">
          <a download href={require("../../../utils/resume/Avinash_resume.pdf")}>
            <AiOutlineCloudDownload/> Download Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Contact