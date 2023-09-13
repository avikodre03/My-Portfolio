import React from 'react'
import './About.css'
import profile from '../../../utils/Images/Portfolio_photo.png'
import profile1 from '../../../utils/Images/photo.png'
import Social from '../../Common/Social/Social'
const About = () => {
    return (
        <div className='About'>
            <div className="about-top">
                <div className="about-info">
                    <p>Hello There 👋, I am <br /> <span className='info-name'>Avinash Kodre.</span> <br /> I Love Experimenting With the Web.</p>
            <a  href="https://drive.google.com/file/d/177_DZMsAWpMryGvaF4wjGS9nKPRRCFjb/view?usp=sharing">

              <button>My Resume</button>
            </a>
                </div>
                <div className="about-photo">
                    <img src={profile1} alt="profile" />
                </div>
            </div>
          <Social/>
        </div>
    )
}

export default About