import LinkSocial from '@/component/LinkSocial'
import Signal from '@/component/Signal'
import { getPostMetadata } from '@/utils'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

export default function Home() {
  const posts = getPostMetadata()
  return (
    <div className='mt-14 md:mt-24'>
      <TopHeadline />
      <h1 className='text-[56px] text-white mt-6 leading-[80px]'>
        Mulyana, <br />
        <span className='text-white/40'>a Frontend Developer</span>
      </h1>
      <p className='text-white/80 max-w-[610px] mt-6 text-sm'>
        Junior front-end developer based in Indonesia specializing in crafting
        highly responsive and visually appealing user interfaces for seamless
        user experiences.
      </p>
    </div>
  )
}

function TopHeadline() {
  return (
    <div className='flex items-center justify-between'>
      <Signal text='Available for internship' type='primary' ping />
      <div className='flex items-center gap-4'>
        <LinkSocial href='https://twitter.com/_mulll__'>
          <BsTwitter />
        </LinkSocial>
        <LinkSocial
          href='https://www.linkedin.com/in/mmulyana/'
          styleChild='text-sm'
        >
          <BsLinkedin />
        </LinkSocial>
        <LinkSocial href='https://github.com/mmulyana'>
          <BsGithub />
        </LinkSocial>
      </div>
    </div>
  )
}
