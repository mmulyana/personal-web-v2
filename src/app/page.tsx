import { getPostMetadata } from "@/utils"
import Link from "next/link"

export default function Home() {
  const posts = getPostMetadata()
  return (
    <div className="container max-w-[800px]">
      <h1>Mulyana, Frontend Developer</h1>
      {posts.map((post) => <Link href={`post/${post.slug}`}>{post.title}</Link>)}
    </div>    
  )
}
