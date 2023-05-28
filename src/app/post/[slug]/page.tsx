import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata } from '@/utils'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
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
    <div className='container max-w-[800px]'>
      <h1 className='text-2xl '>{post.data.title}</h1>
      <p className='mt-2'>{post.data.date}</p>

      <article className='prose'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage
