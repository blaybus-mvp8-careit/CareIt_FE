'use client'

import { useFormContext } from 'react-hook-form'
import DaumPostCode from 'react-daum-postcode'
import Modal from 'react-modal'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function StepAddress() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const [isPostCodeOpen, setIsPostCodeOpen] = useState(false)
  const address = watch('address')

  const buttonColor =
    type === 'care'
      ? 'bg-customGreen hover:bg-customLightGreen'
      : 'bg-customBlue hover:bg-customLightBlue'
  const textColor = type === 'care' ? 'text-customGreen' : 'text-customBlue'

  // Todo: api 연결시 필요한 주소 데이터 확정 후 data type 지정
  const selectedPostCode = (data: any) => {
    setValue('zonecode', data.zonecode)
    setValue('address', data.address)
    setIsPostCodeOpen(false)
  }

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className={`${textColor}`}>Q. </span>주소를 입력해 주세요.
        <span className={`${textColor} text-sm`}> (필수) </span>
      </h2>
      <div className='flex gap-4'>
        <input
          {...register('zonecode', {
            required: '우편번호를 입력하세요',
          })}
          type='text'
          className='flex w-[70%] justify-between rounded-xl border border-buttonGray p-2 px-4'
          readOnly
        />
        <button
          type='button'
          onClick={() => setIsPostCodeOpen(true)}
          className={`${buttonColor} w-[30%] rounded-xl font-semibold text-white`}
        >
          우편번호 찾기
        </button>
      </div>
      {address && (
        <>
          <input
            {...register('address', { required: '주소를 입력하세요' })}
            type='text'
            className='mt-4 flex w-full justify-between rounded-xl border border-buttonGray p-2 px-4'
            placeholder='주소'
            readOnly
          />
          <input
            {...register('address-detail', { required: '상세주소를 입력하세요.' })}
            type='text'
            className='mt-4 flex w-full justify-between rounded-xl border border-buttonGray p-2 px-4'
            placeholder='상세 주소'
          />
        </>
      )}
      {errors.address && (
        <p className='p-2 text-sm text-red-500'>{`* ${errors.address.message}`}</p>
      )}
      <Modal
        isOpen={isPostCodeOpen}
        onRequestClose={() => setIsPostCodeOpen(false)}
        ariaHideApp={false}
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      >
        <div className='rounded-xl bg-white p-4'>
          <DaumPostCode onComplete={selectedPostCode} />
        </div>
      </Modal>
    </main>
  )
}
