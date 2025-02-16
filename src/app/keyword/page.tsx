'use client'

import Header from './components/Header'
import KeywordsSelector from './components/KeywordsSelector'

export default function KeywordsPage() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-white'>
      {/* <h1 className='mb-4 text-2xl font-bold text-green-700'>나를 키워드로 설명해주세요</h1> */}
      <Header />
      <p className='my-[18px] mb-6 text-center text-gray-600'>
        가장 중요하게 생각하는 키워드 3개를 선택해주세요.
        <br />
        선택하신 키워드는 언제든 바꿀 수 있습니다.
      </p>

      <KeywordsSelector />
    </div>
  )
}
