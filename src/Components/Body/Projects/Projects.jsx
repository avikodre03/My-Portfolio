import React from 'react'
import './Projects.css'
import { ProjectData } from '../../Data/Projects'
import ProjectCard from './ProjectCard/ProjectCard'
import Separator from '../../Common/Separator/Separator'
const Projects = () => {
const data=ProjectData

  return (
    <div className='Projects'>
      <Separator/>
      <label className='section-title'>Projects</label>
      <div>
{data.map((ele)=>{
  return <ProjectCard data={ele}/>
})}
      </div>
    </div>
  )
}

export default Projects