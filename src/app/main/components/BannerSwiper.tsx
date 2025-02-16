'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import '@/styles/swiper-custom.css'

const swiperImages = [
  {
    id: 'step1',
    src: '/mainBanner01.svg',
    alt: '메인배너',
  },
  { id: 'step2', src: '/mainBanner01.svg', alt: '메인배너' },
  { id: 'step3', src: '/mainBanner01.svg', alt: '메인배너' },
]

function BannerSwiper() {
  return (
    <div className='mt-10'>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className='h-auto w-full'
      >
        {swiperImages.map((image) => (
          <SwiperSlide key={image.id} className='flex h-full w-full items-center justify-center'>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={300}
              className='mb-10 rounded-xl'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerSwiper
