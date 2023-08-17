import { posts } from '@/models/posts'
import { formatDate } from '@/utils'
import Link from 'next/link'

type Props = {
  posts: posts[]
}

export default function Blogs({ posts }: Props) {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className='text-white p-4 rounded-xl bg-[#21212C] border-2 border-transparent hover:border-blue-700 relative'
        >
          <Link href={`post/${post.slug}`} className='capitalize'>
            {post.title}
          </Link>
          <p className='mt-2 text-white/60 font-light text-sm'>
            {post.subtitle}
          </p>
          <p className='mt-3 text-xs'>{formatDate(post.date)}</p>
          {post.status === 'draft' && (
            <p className='absolute right-4 top-4 border border-gray-50/10 text-white/50 text-xs px-3 py-1 rounded capitalize font-normal'>
              {post.status}
            </p>
          )}
        </div>
      ))}
    </>
  )
}
