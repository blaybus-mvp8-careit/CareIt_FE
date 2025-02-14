'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import signinSchema from '@/app/login/schema'
import SnsMap from '@/app/components/SnsMap'
import Link from 'next/link'

type SigninForm = z.infer<typeof signinSchema>

function SignForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = (data: SigninForm) => {
    // 로그인 처리 로직
    console.log(data)
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        {/* 이메일 입력 필드 */}
        <div className='relative'>
          <label htmlFor='id' className='block text-sm font-medium text-gray-700'>
            아이디
          </label>
          <div className='relative mt-2'>
            <Image
              src='/pencilIcon.svg'
              alt='연필이미지'
              className='absolute left-3 top-1/2 -translate-y-1/2'
              width={24}
              height={24}
            />
            <input
              {...register('id')}
              type='id'
              id='id' // label의 htmlFor와 일치하는 id
              className={`h-12 w-full border-b pb-4 pl-10 pr-8 pt-5 outline-none placeholder:text-base placeholder:text-slate-400 ${errors.id ? 'border-red-500' : 'border-gray-300'}`}
              placeholder='아이디를 입력해 주세요.'
            />
            {errors.id && (
              <ExclamationCircleOutlined className='absolute right-[2px] top-1/2 -translate-y-1/2 text-[22px] text-[#FF0000]' />
            )}
          </div>
        </div>

        {/* 비밀번호 입력 필드 */}
        <div className='relative mt-4'>
          <label htmlFor='pwd' className='block text-sm font-medium text-gray-700'>
            비밀번호
          </label>
          <div className='relative mt-2'>
            <Image
              src='/lockIcon.svg'
              alt='이미지'
              className='absolute left-3 top-1/2 -translate-y-1/2'
              width={24}
              height={24}
            />
            <input
              {...register('pwd')}
              type='password'
              id='pwd'
              className={`h-12 w-full border-b pb-4 pl-10 pr-8 pt-5 outline-none placeholder:text-base placeholder:text-slate-400 ${errors.pwd ? 'border-red-500' : 'border-gray-300'}`}
              placeholder='비밀번호를 입력해 주세요.'
            />
            {errors.pwd && (
              <ExclamationCircleOutlined className='absolute right-[2px] top-1/2 -translate-y-1/2 text-[22px] text-[#FF0000]' />
            )}
          </div>
        </div>

        <SnsMap />
        <button
          type='submit'
          className='mt-[19px] h-[62px] w-full rounded-2xl bg-[#02B68A] text-white disabled:bg-gray-300'
          // disabled={!formState.isValid}
        >
          회원가입
        </button>
      </form>
      <div className='mt-[120px] flex justify-center'>
        <p>이미 계정이 있으신가요?</p>
        <Link
          href='/login'
          className='ml-1 font-bold text-[#02B68A] underline decoration-[#02B68A]'
        >
          로그인
        </Link>
      </div>
    </div>
  )
}

export default SignForm
