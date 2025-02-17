'use client'

import { useEffect, useState } from 'react'
import { Button } from 'antd'

interface WorkConditionProps {
  date: string
  frequency: string
  workType: string
}

function WorkCondition() {
  const [workCondition, setWorkCondition] = useState<WorkConditionProps | null>(null)

  useEffect(() => {
    // API에서 데이터를 가져오는 더미 함수
    const fetchData = async () => {
      const dummyData = {
        date: '2월 22일', // API에서 불러온 데이터로 대체 예정
        frequency: '주 2회',
        workType: '방문목욕',
      }
      setWorkCondition(dummyData)
    }
    fetchData()
  }, [])

  return (
    workCondition && (
      <div className='mt-[29px] w-full max-w-md rounded-2xl bg-gradient-to-r from-[#c7e5c7] to-[#50cdae] p-6 text-center'>
        <div className='flex h-[39px] items-center justify-center gap-3 rounded-2xl bg-[#e4f5ec] text-[15px] font-semibold text-[#02B68A]'>
          <span>{workCondition.date}</span>
          <span>/</span>
          <span>{workCondition.frequency}</span>
          <span>/</span>
          <span>{workCondition.workType}</span>
        </div>
        <p className='mt-4 text-2xl font-bold text-white'>이런 근무조건 어떠세요?</p>
        <Button className='mt-4 h-[21px] w-[126px] rounded-2xl bg-white px-4 py-2 text-[8px] font-semibold text-[#02B68A]'>
          근무조건 설정하기 →
        </Button>
      </div>
    )
  )
}

export default WorkCondition
