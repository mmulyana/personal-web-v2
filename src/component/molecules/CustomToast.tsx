type Props = {
  toastProps?: any
  closeToast?: () => any
}
function CustomToast({ toastProps, closeToast }: Props) {
  return (
    <div className='flex'>
      <div className="text-green-300">
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 10.3L11.4 15.1C11 15.5 10.4 15.5 10 15.1L7.8 12.9C7.4 12.5 7.4 11.9 7.8 11.5C8.2 11.1 8.8 11.1 9.2 11.5L10.7 13L14.8 8.9C15.2 8.5 15.8 8.5 16.2 8.9C16.6 9.3 16.6 9.9 16.2 10.3Z'
            fill='currentColor'
          />
        </svg>
      </div>
      <div className="ml-2">
      <p className="text-green-600">Message sent</p>
      <p className="text-white/50 mt-1 text-sm">I&apos;ve received your message. I&apos;ll be in touch soon!</p>
      </div>
    </div>
  )
}

export default CustomToast