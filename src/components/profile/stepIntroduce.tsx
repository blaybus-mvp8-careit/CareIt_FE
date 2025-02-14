'use client'

import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

export default function StepIntroduce() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const [inputValue, setInputValue] = useState('')
  const maxLength = 20

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className='text-customGreen'>Q. </span>한줄 소개를 작성해주세요.
        <span className='text-customGreen text-sm'> (선택) </span>
      </h2>
      <div className='border-buttonGray flex w-full justify-between rounded-xl border p-2 px-4'>
        <input
          {...register('introduce', {
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
      {errors.introduce && (
        <p className='p-2 text-sm text-red-500'>{`* ${errors.introduce.message}`}</p>
      )}
    </main>
  )
}
