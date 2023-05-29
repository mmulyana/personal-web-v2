import fs from 'fs'
import matter from 'gray-matter'
import { posts } from '../models/posts'
import reactIcon from 'public/icon/react.svg'
import typescriptIcon from 'public/icon/typescript.svg'
import nextIcon from 'public/icon/next.svg'
import gitIcon from 'public/icon/git.svg'
import figmaIcon from 'public/icon/figma.svg'
import nodeIcon from 'public/icon/node.svg'
import rtlIcon from 'public/icon/rtl.png'
import tailwindIcon from 'public/icon/tailwind.svg'
import reduxIcon from 'public/icon/redux.svg'
import graphqlIcon from 'public/icon/graphql.svg'
import jsIcon from 'public/icon/js.svg'

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

const skills = [
  { icon: reactIcon, title: 'react' },
  { icon: nextIcon, title: 'next.js' },
  { icon: tailwindIcon, title: 'tailwind' },
  { icon: reduxIcon, title: 'redux' },
  { icon: graphqlIcon, title: 'grapql' },
  { icon: jsIcon, title: 'javascript' },
  { icon: typescriptIcon, title: 'typescript' },
  { icon: rtlIcon, title: 'react testing library' },
  { icon: nodeIcon, title: 'node.js' },
  { icon: figmaIcon, title: 'figma' },
  { icon: gitIcon, title: 'git' },
]

function formatDate(dateString: string) {
  let date = dateString.split('-')
  let year = date[0]
  let month = date[1]
  let day = date[2]

  let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

  let monthName = months[parseInt(month) - 1]

  let formattedDate = `${monthName} ${day}, ${year}`
  return formattedDate
}

export { getPostMetadata, skills, formatDate }
