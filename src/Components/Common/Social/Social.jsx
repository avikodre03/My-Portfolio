import React from 'react'
import './Social.css'

import { SocialData } from '../../Data/SocialLink'

const Social = () => {

const data=SocialData
console.log(data);
  return (
    <div className='Social-contact'>
       {data.map((ele)=>{
        return <>
        <a href={ele.link}>
            <div className="social-icon">

        <img src={ele.icon} alt={ele.platform} />
            </div>
        </a>
        </>
       })}
           
    </div>
  )
}

export default Social