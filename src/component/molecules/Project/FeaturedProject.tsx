import { project } from '@/models/projects'
import Link from 'next/link'
import React from 'react'

type Props = {
  projects: project[]
}

export default function FeaturedProject({ projects }: Props) {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className='project'>
          <div className='project__layer' />
          <img src={project.thumbnail} className='project__thumbnail' />
          <div className='project__desc'>
            <Link href={project.href} target='__blank'>{project.title}</Link>
          </div>
        </div>
      ))}
    </>
  )
}
