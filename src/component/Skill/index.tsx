import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Skill({ children }: Props) {
  return (
    <div className='h-14 w-14 rounded-2xl flex items-center justify-center bg-[#21212C]'>
      {children}
    </div>
  )
}
