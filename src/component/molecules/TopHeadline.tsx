import { linksI } from '@/models'
import LinkSocial from '../atoms/LinkSocial'
import Signal from '../atoms/Signal'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function TopHeadline() {
  return (
    <div className='flex items-start md:items-center justify-between flex-col md:flex-row'>
      <Signal text='Currently Frontend intern at kecilin' type='info' ping />
      <div className='mt-10 md:mt-0 flex items-center gap-4 w-full md:w-fit justify-start'>
        {links.map((link, index) => (
          <LinkSocial key={index} href={link.href}>
            <>{link.icon}</>
          </LinkSocial>
        ))}
      </div>
    </div>
  )
}

const links: linksI[] = [
  {
    href: 'https://twitter.com/_mulll__',
    icon: <BsTwitter />,
  },
  {
    href: 'https://www.linkedin.com/in/mmulyana/',
    icon: <BsLinkedin />,
  },
  {
    href: 'https://github.com/mmulyana',
    icon: <BsGithub />,
  },
  {
    href: 'mailto:mulyan.t20@gmail.com',
    icon: <MdEmail/>
  }
]
