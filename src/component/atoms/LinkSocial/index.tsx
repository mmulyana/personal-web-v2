import React from 'react'
import Link from 'next/link'
type Props = {
  children: React.ReactNode
  href: string
  styleChild?: string
}

export default function LinkSocial({ children, href, styleChild }: Props) {
  return (
    <div className='h-8 w-8 rounded-full flex items-center justify-center bg-[#77777C]/20'>
      <Link href={href} target='_blank'>
        <span className={['text-white', !!styleChild && styleChild].join(' ')}>
          {children}
        </span>
      </Link>
    </div>
  )
}
