import { project } from '@/models/projects'
import Link from 'next/link'
import React from 'react'

type Props = {
  projects: project[]
}

export default function LatestProject({ projects }: Props) {
  return (
    <>
      {projects.map((p, index) => (
        <div key={index} className='latest-project'>
          <div className='latest-project__image'>
            <div className='latest-project__image__layer' />
            <img src={p.thumbnail} className='latest-project__image__src' />
          </div>
          <div className='flex items-center justify-between w-full pr-6 gap-3'>
            <div>
              {p.status !== 'published' ? (
                <>
                  <div className='flex gap-2 items-center mb-2'>
                    <div className='w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center relative'>
                      <div className='w-2 h-2 rounded-full bg-red-600' />
                      <div className='w-2 h-2 rounded-full bg-red-600 animate-ping absolute' />
                    </div>
                    <p className='text-white text-xs'>{p.status}</p>
                  </div>
                </>
              ) : null}
              <Link
                href={`/project/${p.slug}`}
                className='text-white font-medium block'
              >
                {p.title}
              </Link>
              <p className='mt-1 text-white/70 font-light text-xs hidden md:block'>
                {p.subtitle}
              </p>
            </div>
            <div>
              <Link
                target='__blank'
                href='/'
                className='text-xs px-3 py-2 rounded-lg border border-white/20 text-white hover:text-[#191921] hover:bg-white font-medium'
              >
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
