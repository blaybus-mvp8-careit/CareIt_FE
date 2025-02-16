'use client'

import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='fixed bottom-0 left-0 z-10 w-full border-t bg-white py-2 shadow-md'>
      <div className='flex justify-around text-gray-800'>
        {/* 히스토리 */}
        <Link href='/history' className='flex flex-col items-center text-xs font-semibold'>
          <Image
            src='/historyIcon.svg'
            alt='히스토리리 아이콘'
            width={30}
            height={30}
            className='h-[30px] w-[30px] rounded-lg object-cover'
          />{' '}
          <span className='mt-1'>히스토리</span>
        </Link>

        {/* 홈 */}
        <Link href='/' className='flex flex-col items-center text-xs font-semibold'>
          <Image
            src='/homeIcon.svg'
            alt='홈 아이콘'
            width={30}
            height={30}
            className='h-[30px] w-[30px] rounded-lg object-cover'
          />{' '}
          <span className='mt-1'>홈</span>
        </Link>

        {/* 마이 */}
        <Link href='/my' className='flex flex-col items-center text-xs font-semibold'>
          <Image
            src='/myPageIcon.svg'
            alt='마이페이지 아이콘'
            width={30}
            height={30}
            className='h-[30px] w-[30px] rounded-lg object-cover'
          />
          <span className='mt-1'>마이</span>
        </Link>
      </div>
    </div>
  )
}

export default Footer
