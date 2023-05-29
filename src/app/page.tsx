import Blogs from '@/component/atoms/Blogs'
import Skill from '@/component/atoms/Skill'
import TopHeadline from '@/component/molecules/TopHeadline'
import { getPostMetadata, skills } from '@/utils'
import Image from 'next/image'

export default function Home() {
  const posts = getPostMetadata()
  return (
    <>
      <section className='mt-10'>
        <TopHeadline />
        <h1 className='text-3xl md:text-[56px] text-white mt-6 leading-10 md:leading-[80px]'>
          Mulyana, <br />a{' '}
          <span className='text-white/40'>Frontend Developer</span>
        </h1>
        <p className='text-white/80 max-w-[610px] mt-6 text-sm'>
          Junior front-end developer based in Indonesia specializing in crafting
          highly responsive and visually appealing user interfaces for seamless
          user experiences.
        </p>
      </section>

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white'>Featured Project</h4>
      </section>

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white'>Stack</h4>
        <div className='mt-4 flex gap-8 items-center flex-wrap'>
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

      <section className='mt-10 md:mt-20'>
        <h4 className='text-white'>Writing</h4>
        <div className='mt-4'>
          <Blogs posts={posts} />
        </div>
      </section>
    </>
  )
}
