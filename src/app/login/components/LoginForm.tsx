'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import Image from 'next/image'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import signinSchema from '../schema'

type SigninForm = z.infer<typeof signinSchema>

function LoginForm() {
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
              id='id'
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

        {/* 아이디저장 */}
        <div className='mx-1 mt-5 flex justify-between align-middle'>
          <div className='text-[14px]'>아이디 저장</div>
          <Link href='/' className='text-[14px]'>
            아이디/비밀번호 찾기
          </Link>
        </div>

        {/* 로그인 버튼 */}
        <button
          type='submit'
          className='mt-[50px] h-[62px] w-full rounded-2xl bg-[#02B68A] text-white disabled:bg-gray-300'
          // disabled={!formState.isValid}
        >
          로그인
        </button>
        {/* 회원가입 버튼 */}
        <Link
          href='/signup'
          className='mt-4 flex h-[62px] w-full items-center justify-center rounded-2xl border border-[#02B68A] text-[#02B68A]'
        >
          회원가입
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
