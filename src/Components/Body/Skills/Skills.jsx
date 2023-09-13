import React from 'react'
import './Skills.css'
import Separator from '../../Common/Separator/Separator'
import { SkillsData } from '../../Data/Skills'
const Skills = () => {
  const data = SkillsData
  return (
    <div className='Skills'>
      <Separator />
      <label className='section-title'>Skills</label>

      <div className="skills-list">
        {data.map((ele) => {
          return <>
            <div className="icon">
              <a href={ele.link}>

              {ele.icon}
             <p> {ele.name}</p>
              </a>
             </div>
          </>
        })}
      </div>
    </div>
  )
}

export default Skills