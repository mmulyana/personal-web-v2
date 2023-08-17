import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { getDir, getFileNames, getItemInPath, getAllItems } from './md'

const BLOG_DIR = getDir('/data/posts')

const getNoteFileNames = () => {
  return getFileNames(BLOG_DIR)
}

const getNote = (fileName: string): any => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as any
  blog.slug = fileName.replace(/\.md$/, '')
  return blog
}

const getNotes = (): any[] => {
  const names = getNoteFileNames()
  return getAllItems(names, getNote)
}

const getNotesSlugs = () => {
  return getNoteFileNames().map((fileName) => fileName.replace(/\.md$/, ''))
}

const getNoteBySlug = (slug: string) => {
  const fileName = slug + '.md'
  return getNote(fileName)
}

const getNoteBySlugWithMarkdown = async (slug: string): Promise<any> => {
  const mdx = getNoteBySlug(slug)
  const blog = await serialize(mdx.content, {
    scope: { ...mdx },
  })
  return blog
}

export {
  getNoteFileNames,
  getNote,
  getNotes,
  getNotesSlugs,
  getNoteBySlug,
  getNoteBySlugWithMarkdown,
}
