import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { formatDate, getPostMetadata } from '@/utils'
import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'

const getPostContent = (slug: string) => {
  const folder = 'data/posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div className='mt-12'>
      <Link
        className='h-7 w-7 flex items-center justify-center rounded-md text-2xl text-white/80 bg-[#21212C]'
        href='/'
      >
        <BiChevronLeft />
      </Link>
      <h1 className='mt-8 text-2xl text-white font-semibold capitalize'>
        {post.data.title}
      </h1>
      <p className='mt-2 text-white/80 text-sm'>{formatDate(post.data.date)}</p>

      <article className='prose prose-invert'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage
