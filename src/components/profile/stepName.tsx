'use client'

import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function StepName() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const [inputValue, setInputValue] = useState('')
  const maxLength = 20

  const textColor = type === 'care' ? 'text-customGreen' : 'text-customBlue'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className={`${textColor}`}>Q. </span>이름을 입력해 주세요.
        <span className={`${textColor} text-sm`}> (필수) </span>
      </h2>
      <div className='border-buttonGray flex w-full justify-between rounded-xl border p-2 px-4'>
        <input
          {...register('name', {
            required: '이름을 입력하세요',
            maxLength: {
              value: 20,
              message: '최대 20자까지만 입력 가능합니다.',
            },
          })}
          type='text'
          className='w-[90%]'
          value={inputValue}
          onChange={handleInputChange}
        />
        <span className='text-buttonGray text-sm'>
          {inputValue.length}/{maxLength}
        </span>
      </div>
      {errors.name && <p className='p-2 text-sm text-red-500'>{`* ${errors.name.message}`}</p>}
    </main>
  )
}
