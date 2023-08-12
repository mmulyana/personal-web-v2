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
import { project } from '@/models/projects'

function getFileDir(dir: string) {
  const folder = dir + '/'
  const files = fs.readdirSync(folder)
  return files.filter((file) => file.endsWith('.md'))
}

function getPostMetadata(): posts[] {
  const markdownPosts = getFileDir('data/posts')

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`data/posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumbnail: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
      status: matterResult.data.status,
    }
  })

  return posts
}

function getProjectMetadata(): project[] {
  const markdownProject = getFileDir('data/projects/')

  const projects = markdownProject.map((fileName) => {
    const fileContents = fs.readFileSync(`data/projects/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      endDate: matterResult.data.endDate,
      startDate: matterResult.data.startDate,
      slug: fileName.replace('.md', ''),
      thumbnail: matterResult.data.thumbnail,
      stack: matterResult.data.stack,
      isFeatured: matterResult.data.isFeatured,
      status: matterResult.data.status,
      href: matterResult.data.href,
      repo: matterResult.data.repo,
    }
  })

  return projects
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

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let monthName = months[parseInt(month) - 1]

  let formattedDate = `${monthName} ${day}, ${year}`
  return formattedDate
}

export { getPostMetadata, getProjectMetadata, skills, formatDate }
