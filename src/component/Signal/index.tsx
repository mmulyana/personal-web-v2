import React from 'react'
import configs from './configs'

type Props = {
  type: string
  text: string
}

export default function Signal({ type, text }: Props) {
  const styleBg = [
    'w-5 h-5 rounded-full flex items-center justify-center',
    type === 'primary' ? configs.bg.primary : '',
  ].join(' ')

  const styleDotted = [
    'h-[10px] w-[10px] rounded-full',
    type === 'primary' ? configs.color.primary : '',
    type === 'primary' ? configs.shadow.primary : '',
  ].join(' ')

  return (
    <div className='flex gap-4 items-center'>
      <div className={styleBg}>
        <div className={styleDotted}></div>
      </div>
      <p className='text-white/90 text-sm'>{text}</p>
    </div>
  )
}
