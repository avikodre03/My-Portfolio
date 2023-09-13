import React from 'react'
import './ProjectCard.css'
import { AiOutlineGlobal } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({data}) => {
  return (
    <div className='project-card'>
        <div className="project-info">
            <label className='project-title'>{data.title}</label>

            <div className="project-links">
                {data.demo&& <a className='project-link' href={data.demo}>
                    <div className='host-link-button'><AiOutlineGlobal/> Demo</div>
                    </a>}
                    {data.github && 
                    <a className='project-link' href={data.github}>
                    <div className='github-link-button'><AiFillGithub/> Github</div>
                    </a>}
            </div>
            <div className="project-about">
                <p>{data.about}</p>
            </div>
            <div className="project-tags">
                {data.tags.map((ele)=>{
                    return<label className='tag'>{ele}</label>
                })}
            </div>
        </div>
        <img src={data.image} alt={data.title} className='project-photo'/>
    </div>
  )
}

export default ProjectCard