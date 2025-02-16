import { useFormContext } from 'react-hook-form'

export default function StepCareer() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className='text-customGreen'>Q. </span>주요 경력과 기간을 입력해 주세요.
        <span className='text-sm text-customGreen'> (선택) </span>
      </h2>
      <div>
        <label htmlFor='career' className='px-4'>
          주요 경력
          <input
            {...register('career', {})}
            type='text'
            id='career'
            className='mb-6 mt-2 flex w-full justify-between rounded-xl border border-buttonGray p-2 px-4'
            placeholder='직접 입력해 주세요.'
          />
        </label>
        <label htmlFor='date' className='px-4'>
          재직기간
          <div className='mt-2 flex items-center gap-4'>
            <input
              {...register('startDate', {
                pattern: {
                  value: /^\d{6}$/,
                  message: 'YYYYMM 형식으로 입력해 주세요.',
                },
              })}
              type='number'
              id='date'
              placeholder='YYYYMM'
              className='w-[50%] rounded-xl border border-buttonGray p-2 px-4'
            />
            <span>-</span>
            <input
              {...register('endDate', {
                pattern: {
                  value: /^\d{6}$/,
                  message: 'YYYYMM 형식으로 입력해 주세요.',
                },
              })}
              type='number'
              id='date'
              placeholder='YYYYMM'
              className='w-[50%] rounded-xl border border-buttonGray p-2 px-4'
            />
          </div>
        </label>
      </div>
      {errors.startDate && (
        <p className='mt-1 text-sm text-red-500'>{`*${errors.startDate.message}`}</p>
      )}
      {errors.endDate && (
        <p className='mt-1 text-sm text-red-500'>{`*${errors.endDate.message}`}</p>
      )}
    </main>
  )
}
