import React from 'react'
import configs from './configs'

type Props = {
  type: string
  text: string
  ping?: boolean
}

export default function Signal({ type, text, ping }: Props) {
  const styleBg = [
    'w-5 h-5 rounded-full flex items-center justify-center relative',
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
        {!!ping && (
          <div
            className={[
              'h-[10px] w-[10px] rounded-full absolute animate-ping',
              type === 'primary' ? configs.color.primary : '',
            ].join(' ')}
          ></div>
        )}
      </div>
      <p className='text-white/90 text-sm'>{text}</p>
    </div>
  )
}
