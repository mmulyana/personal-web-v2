import Blogs from '@/component/molecules/Blogs'
import { posts } from '@/models/posts'
import { getPostMetadata } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'

export default function index() {
  const posts = getPostMetadata()

  return (
    <div className='mt-12'>
      <Link
        className='h-7 w-7 flex items-center justify-center rounded-md text-2xl text-white/80 bg-[#21212C]'
        href='/'
      >
        <BiChevronLeft />
      </Link>
      <h1 className='my-4 text-2xl text-white font-semibold capitalize'>
        Blogs
      </h1>
      <div className='space-y-4'>
        <Blogs
          posts={posts
            .slice(0, 5)
            .filter((d: posts) => d.status === 'published' || 'draft')
            .sort((item1, item2) => (item1.date > item2.date ? -1 : 1))}
        />
      </div>
    </div>
  )
}
