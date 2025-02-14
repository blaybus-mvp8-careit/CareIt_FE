'use client'

import React, { JSX, useRef, useState } from 'react'
import { CameraFilled } from '@ant-design/icons'
import Image from 'next/image'
import Header from './Header'
import SignForm from './SignForm'

export default function SignupMain(): JSX.Element {
  const [image, setImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0]
      console.log('선택된 파일:', file)
      if (file) {
        const reader = new FileReader()
        reader.onload = () => setImage(reader.result as string)
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <div className='h-screen bg-white text-black'>
      <Header />
      <div className='mx-auto max-w-3xl'>
        <div className='mx-8'>
          <div className='mb-[22px]'>
            <button
              type='button'
              className='relative mx-auto mt-[43px] flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full bg-[#d9d9d9]'
              onClick={handleClick}
            >
              {image ? (
                <Image src={image} alt='가입이미지' className='object-cover' fill />
              ) : (
                <CameraFilled className='text-[45px]' />
              )}
              <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                accept='image/*'
                onChange={handleFileChange}
              />
            </button>
          </div>
          <SignForm />
        </div>
      </div>
    </div>
  )
}
