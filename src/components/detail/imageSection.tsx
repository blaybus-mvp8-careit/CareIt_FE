'use client'

import { LeftOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ImageSection() {
  const router = useRouter()
  return (
    <section className='relative h-[550px] w-full'>
      <LeftOutlined
        onClick={() => router.back()}
        className='absolute left-4 top-4 z-10 cursor-pointer text-[29px] text-white'
      />
      <Image src='/image/detail-profile.jpg' alt='image' fill className='object-cover' />
    </section>
  )
}
