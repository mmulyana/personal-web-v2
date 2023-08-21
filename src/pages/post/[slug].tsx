import { GetStaticPaths, GetStaticProps } from 'next/types'
import { MDXRemote } from 'next-mdx-remote'
import { ParsedUrlQuery } from 'querystring'
import { getNoteBySlugWithMarkdown, getNotesSlugs } from '@/utils/blogs'
import '@/app/globals.css'
import CodeBlock from '@/component/molecules/CodeBlock'
import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'
import { formatDate } from '@/utils'
import Footer from '@/component/molecules/Footer'

type Props = {
  note: any
}

const component = {
  CodeBlock,
}

export default function BlogDetail({ note }: Props) {
  return (
    <>
      <div className='mt-12 max-w-[800px] mx-auto'>
        <Link
          className='h-7 w-7 flex items-center justify-center rounded-md text-2xl text-white/80 bg-[#21212C]'
          href='/'
        >
          <BiChevronLeft />
        </Link>
        <h1 className='mt-8 mb-4 text-2xl text-white font-semibold capitalize'>
          {note.scope.title}
        </h1>
        <div className='prose prose-invert max-w-[800px]'>
          <MDXRemote {...note} components={component} />
        </div>
      </div>
      <Footer />
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!
  const note = await getNoteBySlugWithMarkdown(slug)
  return {
    props: { note },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getNotesSlugs()
  const paths = slugs.map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}
