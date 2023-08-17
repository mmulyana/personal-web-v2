import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const getDir = (path: string) => join(process.cwd(), path)

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir)
}

const getItemInPath = (filePath: string): any => {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { ...data, content } as any
}

const getAllItems = ( fileNames: string[], get: (name: string) => any) => {
  const items = fileNames
    .map((name) => get(name))
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return items
}


export { getDir, getFileNames, getItemInPath, getAllItems }