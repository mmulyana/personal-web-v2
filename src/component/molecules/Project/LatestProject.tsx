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
          <div className='flex items-center justify-between w-full pr-4 md:pr-6 gap-3'>
            <div>
              <div className='flex gap-2 items-center mb-2'>
                <Link
                  href={`/project/${p.slug}`}
                  className='text-white font-medium block text-sm md:text-base'
                >
                  {p.title}
                </Link>
                {p.status === 'ongoing' ? (
                  <>
                    <div className='flex gap-2 items-center'>
                      <div className='gap-2 items-center border border-amber-900 bg-amber-900/20 inline-flex py-1 pl-1 pr-3 rounded'>
                        <div className='w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center relative'>
                          <div className='w-2 h-2 rounded-full bg-amber-500' />
                          <div className='w-2 h-2 rounded-full bg-amber-500 animate-ping absolute' />
                        </div>
                        <p className='text-white/50 text-xs'>{p.status}</p>
                      </div>
                    </div>
                  </>
                ) : null}
                {p.status === 'pending' ? (
                  <>
                    <div className='gap-2 items-center border border-red-900 bg-red-900/20 inline-flex py-1 px-3 rounded'>
                      <p className='text-white/50 text-xs'>{p.status}</p>
                    </div>
                  </>
                ) : null}
              </div>
              <p className='mt-1 text-white/70 font-light text-xs hidden md:block'>
                {p.subtitle}
              </p>
            </div>
            <div>
              <Link
                target='__blank'
                href={p.href}
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
