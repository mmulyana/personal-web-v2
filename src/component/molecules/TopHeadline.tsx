import { linksI } from '@/models'
import LinkSocial from '../LinkSocial'
import Signal from '../Signal'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function TopHeadline() {
  return (
    <div className='flex items-center justify-between'>
      <Signal text='Available for internship' type='primary' ping />
      <div className='flex items-center gap-4'>
        {links.map((link) => (
          <LinkSocial href={link.href}>
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
]
