'use client'

import { useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
import NegotiationModal from '@/components/detail/negotiationModal'

const detailData = {
  title: '가나다 어르신',
  center: '노인구 돌봄 센터',
  centerPhone: '010-1234-5678',
  services: ['주 야간 보호', '방문 요양'],
  workDetails: [
    { label: '근무 지역', value: '서울시 관악구 신림동' },
    { label: '근무 시작날짜', value: '2024년 3월 5일' },
    { label: '근무 요일', value: '화, 수, 목' },
    { label: '근무 시간대', value: '18:00 ~ 20:00' },
  ],
  salary: '조율 후 결정',
}

export default function InfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header>
        <h1 className='text-xl font-bold'>{detailData.title}</h1>
        <p className='py-1 text-sm font-semibold text-textGray'>{detailData.center}</p>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            {detailData.services.map((service, index) => (
              <span key={index} className='rounded-full border border-[#000000] px-4 py-2 text-xs'>
                {service}
              </span>
            ))}
          </div>
          <button
            type='button'
            className='flex items-center gap-1'
            onClick={() => setIsModalOpen(true)}
          >
            <p>조율하기</p>
            <RightOutlined className='text-[18px]' />
          </button>
        </div>
      </header>
      <hr className='my-3 border-buttonGray' />
      <ul className='flex flex-col gap-2'>
        {detailData.workDetails.map((item, index) => (
          <li key={index} className='flex gap-4'>
            <p className='font-bold'>{item.label}</p>
            <p className='text-textGray'>{item.value}</p>
          </li>
        ))}
      </ul>
      <hr className='my-3 border-buttonGray' />
      <footer>
        <div className='mb-4 flex gap-14'>
          <p className='font-bold'>급여</p>
          <p className='text-textGray'>{detailData.salary}</p>
        </div>
        <div className='flex gap-4 px-2'>
          <button
            type='button'
            className='bg-customRed hover:bg-customLightRed w-1/2 rounded-xl py-3 text-white'
          >
            거절하기
          </button>
          <button
            type='button'
            className='w-1/2 rounded-xl bg-customGreen py-3 text-white hover:bg-customLightGreen'
          >
            수락하기
          </button>
        </div>
      </footer>
      <NegotiationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        center={detailData.center}
        centerPhone={detailData.centerPhone}
      />
    </>
  )
}
