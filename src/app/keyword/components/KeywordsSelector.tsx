'use client'

// import Button from 'antd/es/button/button'
import { useState } from 'react'

const traits = [
  '외향적인',
  '내향적인',
  '성실한',
  '세심한',
  '열정적인',
  '차분한',
  '밝은',
  '배려심 많은',
  '온화한',
  '유머러스한',
  '솔직한',
  '계획적인',
]

const services = ['식사보조', '배변보조', '이동보조', '일상생활', '치매증상 케어 전문']

type SetStateFunction = (value: string[] | ((prev: string[]) => string[])) => void

export default function KeywordsSelector() {
  const [selectedTraits, setSelectedTraits] = useState<string[]>([])
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleSelection = (item: string, list: string[], setList: SetStateFunction) => {
    setList((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  return (
    <div className='w-full max-w-3xl px-8 pb-[70px]'>
      <h2 className='mb-3 mt-[6px] text-[20px] font-semibold text-[#9ED49E]'>#성격</h2>
      <div className='mb-6 grid grid-cols-3 gap-3'>
        {traits.map((trait) => (
          <button
            key={trait}
            type='button'
            className={`h-14 min-w-[90px] break-words rounded-[50px] border border-[#767676] px-4 py-2 text-sm text-gray-700 ${
              selectedTraits.includes(trait)
                ? 'border-[#9ED49E] bg-[#9ED49E] text-white'
                : 'bg-white'
            }`}
            onClick={() => toggleSelection(trait, selectedTraits, setSelectedTraits)}
          >
            {trait}
          </button>
        ))}
      </div>

      <h2 className='mb-3 mt-[6px] text-[20px] font-semibold text-[#9ED49E]'>#자신있는 서비스</h2>
      <div className='mb-6 grid grid-cols-3 gap-3'>
        {services.map((service) => (
          <button
            key={service}
            type='button'
            className={`h-14 min-w-[90px] break-words rounded-[50px] border border-[#767676] px-4 py-2 text-sm text-gray-700 ${
              selectedServices.includes(service)
                ? 'border-[#9ED49E] bg-[#9ED49E] text-white'
                : 'bg-white'
            }`}
            onClick={() => toggleSelection(service, selectedServices, setSelectedServices)}
          >
            {service}
          </button>
        ))}
      </div>

      <button
        type='submit'
        className='mt-[203px] h-[54px] w-full rounded-2xl bg-[#02B68A] text-lg text-white'
      >
        선택완료
      </button>
      {/* <div className='fixed bottom-0 left-0 mx-auto w-full max-w-md bg-white p-4 shadow-md'>
        <Button className='w-full rounded-lg bg-green-600 py-3 text-lg text-white'>선택완료</Button>
      </div> */}
    </div>
  )
}
