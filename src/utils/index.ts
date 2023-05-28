import fs from 'fs'
import matter from 'gray-matter'
import { posts } from '../models/posts'

function getPostMetadata(): posts[] {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumbnail: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    }
  })

  return posts
}

export { getPostMetadata }
