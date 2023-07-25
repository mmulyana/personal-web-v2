import Blogs from '@/component/molecules/Blogs'
import FeaturedProject from '@/component/molecules/Project/FeaturedProject'
import Skill from '@/component/atoms/Skill'
import TopHeadline from '@/component/molecules/TopHeadline'
import { getPostMetadata, getProjectMetadata, skills } from '@/utils'
import Image from 'next/image'
import GetInTouch from '@/component/molecules/GetInTouch'
import LatestProject from '@/component/molecules/Project/LatestProject'
import { posts } from '@/models/posts'

export default function Home() {
  const posts = getPostMetadata()
  const projects = getProjectMetadata()

  return (
    <>
      <section className='mt-10'>
        <TopHeadline />
        <h1 className='text-3xl md:text-[56px] text-white mt-6 leading-10 md:leading-[80px]'>
          Mulyana, <br />a{' '}
          <span className='text-white/40'>Frontend Developer</span>
        </h1>
        <p className='text-white/80 max-w-[610px] mt-6 text-sm'>
          Junior front-end developer based in Indonesia
        </p>
      </section>

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white'>Featured Project</h4>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
          <FeaturedProject
            projects={projects.filter((project) => project.isFeatured === true)}
          />
        </div>
      </section>

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white'>Latest Project</h4>
        <div className='mt-5 flex flex-col gap-3'>
          <LatestProject
            projects={projects.sort((item1, item2) => (item1.startDate > item2.startDate ? -1 : 1)).filter((p) => p.isFeatured === false)}
          />
        </div>
      </section>

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white'>Stack</h4>
        <div className='mt-4 flex gap-3 md:gap-0 flex-wrap justify-start md:justify-between'>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <Image
                src={skill.icon}
                alt={skill.title}
                className='w-6 h-fit object-contain'
              />
            </Skill>
          ))}
        </div>
      </section>

      <section className='mt-12 md:mt-20'>
        <h4 className='text-white'>Writing</h4>
        <div className='mt-4 flex flex-col gap-3'>
          <Blogs
            posts={posts
              .slice(0, 5)
              .filter((d: posts) => d.status === 'published' || 'draft')
              .sort((item1, item2) => (item1.date > item2.date ? -1 : 1))}
          />
        </div>
      </section>

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white text-center text-xl font-medium'>
          Get In Touch
        </h4>
        <div className='mt-8 max-w-[400px] mx-auto'>
          <GetInTouch />
        </div>
      </section>
    </>
  )
}
