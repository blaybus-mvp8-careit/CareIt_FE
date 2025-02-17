'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Button } from 'antd'
import { BellOutlined, RightOutlined } from '@ant-design/icons'

const dummyData = [
  { id: '1', name: '서울시 관악구 신림동', days: ['월', '화'], img: '/exmatchingimg.svg' },
  { id: '2', name: '서울시 관악구 신림동', days: ['수', '목'], img: '/exmatchingimg.svg' },
  { id: '3', name: '서울시 관악구 신림동', days: ['금', '토'], img: '/exmatchingimg.svg' },
  { id: '4', name: '서울시 관악구 신림동', days: ['일'], img: '/exmatchingimg.svg' },
]

function MatchingCarousel() {
  return (
    <div className='relative my-[36px] flex w-full flex-col items-center'>
      {/* 헤더 */}
      <div className='item mb-4 flex w-full items-center justify-between'>
        <h2 className='text-[20px] font-bold'>내가 받은 매칭 요청 목록</h2>
        <Link href='/list' className='text-[#767676]'>
          목록 보기 <RightOutlined />
        </Link>
      </div>

      {/* Swiper 적용 */}
      <Swiper
        modules={[EffectCoverflow, Autoplay]} // ✅ Autoplay 추가
        effect='coverflow'
        grabCursor
        centeredSlides // 중앙 카드 기준 정렬
        centeredSlidesBounds // 중앙 카드가 정확한 위치에 오도록 강제 정렬
        centerInsufficientSlides // 작은 화면에서도 중앙 정렬 유지
        slidesPerView={2} // 정확한 중앙 정렬을 위해 2로 조정
        spaceBetween={20} // 카드 간 간격 조정
        slidesOffsetBefore={-28} // ✅ 중앙 카드가 30px 왼쪽으로 이동
        loop // 무한 반복
        autoplay={{ delay: 4000, disableOnInteraction: false }} // ✅ 4초 간격 자동 슬라이드
        coverflowEffect={{
          rotate: 0, // 회전 제거
          stretch: 0,
          depth: 140, // 중앙 강조 높이
          modifier: 2.5, // 슬라이드 간격 조절
          slideShadows: false, // 그림자 효과 제거
        }}
        className='w-full'
      >
        {dummyData.map((item) => {
          const { id, name, days, img } = item

          return (
            <SwiperSlide key={id} className='flex justify-center'>
              <div className='relative w-64 scale-90 rounded-3xl bg-white shadow-lg transition-transform duration-300'>
                <Image
                  src={img}
                  alt={name}
                  width={200}
                  height={200}
                  className='w-full rounded-lg object-cover'
                />
                <Button
                  className='absolute right-[-15px] top-[-15px] flex !h-[55px] !w-[55px] items-center justify-center rounded-full border-none bg-[#FF6666] p-0 text-white shadow-md'
                  onClick={() => console.log('종 클릭 ID:', id)}
                >
                  <BellOutlined style={{ fontSize: 23 }} />
                </Button>

                <div className='p-4'>
                  <h3 className='mt-2 text-lg font-bold'>{name}</h3>
                  <p className='text-gray-500'>{days.join(', ')}</p>

                  <Button
                    className='mt-2 w-full rounded bg-green-500 p-2 text-white'
                    onClick={() => console.log('조회하기 클릭 ID:', id)}
                  >
                    조회하기
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MatchingCarousel
