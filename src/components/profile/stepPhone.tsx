import { useFormContext } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

export default function StepPhone() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const textColor = type === 'care' ? 'text-customGreen' : 'text-customBlue'

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className={`${textColor}`}>Q. </span>연락처를 입력해 주세요.
        <span className={`${textColor} text-sm`}> (필수) </span>
      </h2>
      <input
        {...register('phone-number', {
          required: '연락처를 입력하세요',
          pattern: {
            value: /^[0-9]{10,11}$/, // 10자리 또는 11자리 숫자만 허용
            message: '전화번호는 10자리 또는 11자리 숫자만 입력할 수 있습니다.',
          },
        })}
        type='text'
        placeholder='-없이 숫자만 입력해 주세요.'
        className='border-buttonGray flex w-full justify-between rounded-xl border p-2 px-4'
      />
      {errors['phone-number'] && (
        <p className='p-2 text-sm text-red-500'>{`* ${errors['phone-number'].message}`}</p>
      )}
    </main>
  )
}
