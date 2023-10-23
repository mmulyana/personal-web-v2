'use client'

import { useState } from 'react'

const local = [
  {
    name: 'Kecilin.id',
    role: 'Frontend Developer',
    time: 'Jul - Oct 2023',
    mos: '3 mos',
    status: 'Intern',
  },
  {
    name: 'Black wolf tech id',
    role: 'Frontend Developer',
    time: 'Aug - Oct 2023',
    mos: '2 mos',
    status: 'Freelance',
  },
  {
    name: 'Temantrip',
    role: 'Frontend Developer',
    time: 'Jan - Feb 2023',
    mos: '1 mos',
    status: 'Freelance',
  },
  {
    name: 'Wesafe.id',
    role: 'Frontend Developer',
    time: 'Jun - Oct 2023',
    mos: '4 mos',
    status: 'Volunteer',
  },
]

export default function Works() {
  const [data] = useState(local)
  return (
    <>
      {data.map((data, index) => (
        <div key={index} className='w-full text-white flex justify-between'>
          <div>
            <p className='font-medium'>{data.name}</p>
            <div className='flex gap-1.5 text-sm items-center'>
              <p className='text-white/70'>{data.role}</p>
              <div className='w-1 h-1 rounded-full bg-white' />
              <span className='text-white'>{data.status}</span>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-sm'>{data.time}</p>
            <p className='text-xs opacity-60'>({data.mos})</p>
          </div>
        </div>
      ))}
    </>
  )
}
