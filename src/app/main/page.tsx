'use client'

import { useEffect, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import BannerSwiper from './components/BannerSwiper'
import MatchingRequestCarousel from './components/MatchingRequestSwiper'
import WorkCondition from './components/WorkCondition'

function MainPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) // 1초 후 로딩 완료
  }, [])

  if (isLoading) {
    return (
      <div className='flex h-screen items-center justify-center text-lg font-bold text-gray-600'>
        로딩 중...
      </div>
    )
  }

  return (
    <div className='mb-24 w-full'>
      <Header type='user' />
      <WorkCondition />
      <BannerSwiper />
      <MatchingRequestCarousel />
      <Footer />
    </div>
  )
}

export default MainPage
