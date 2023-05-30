import { project } from '@/models/projects'
import React from 'react'

type Props = {
  projects: project[]
}

export default function FeaturedProject({ projects }: Props) {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className={['project', index === 0 ? 'project-left' : 'project-right'].join(' ')}>
          <div className='project__layer' />
          <img src={project.thumbnail} className='project__thumbnail' />
          <div className='project__desc'>{project.title}</div>
        </div>
      ))}
    </>
  )
}

