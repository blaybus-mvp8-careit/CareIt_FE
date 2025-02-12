import Image from 'next/image'
import React from 'react'
import SnsMap from '@/app/components/SnsMap'
import Header from './Header'
import LoginForm from './LoginForm'

function LoginMain() {
  return (
    <div className='h-screen bg-white text-black'>
      <Header />
      <div className='mx-auto max-w-3xl'>
        <div className='mx-8'>
          <div className='mb-[22px]'>
            <div className='relative mx-auto mt-[43px] flex h-[150px] w-[150px] justify-center overflow-hidden'>
              <Image src='/loginBanner.svg' alt='' className='object-cover' fill />
            </div>
          </div>
          <LoginForm />
          <div className='text-center'>
            <p className='mt-[25px] text-[#767676]'>SNS 계정으로 시작하기</p>
            <SnsMap />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginMain
