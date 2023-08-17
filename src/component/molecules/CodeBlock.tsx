'use client'

import { useEffect, useMemo } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type Props = {
  language: string
  code: string
  title?: string
}

export default function CodeBlock({ code, language, title }: Props) {
  return (
    <div className='rounded-lg overflow-hidden'>
      <div className='bg-[#1D212A] px-4 py-3'>
        <p className={['my-0 text-sm', !title ? 'capitalize' : null].join(' ')}>
          {title ?? language}
        </p>
      </div>
      <div className='bg-[#282C34] px-2 pb-1 rounded-b-lg'>
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{ marginTop: '0', marginBottom: '0' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
