import { useFormContext, useController } from 'react-hook-form'

export default function StepEdu() {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const {
    field: { value, onChange },
  } = useController({
    name: 'hasEdu',
    control,
    rules: { required: '치매 교육 이수 여부를 선택해주세요.' },
  })

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className='text-customGreen'>Q. </span>치매교육을 이수하셨나요?
        <span className='text-sm text-customGreen'> (필수) </span>
      </h2>
      <div className='flex items-center space-x-6'>
        <label
          htmlFor='yes'
          onClick={() => onChange('yes')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onChange('yes')
            }
          }}
          className={`flex w-[50%] cursor-pointer justify-center rounded-xl border py-2 text-textGray ${
            value === 'yes' ? 'border-customGreen' : 'border-buttonGray'
          }`}
        >
          <input
            type='radio'
            value='yes'
            id='yes'
            className='hidden'
            checked={value === 'yes'}
            onChange={() => onChange('yes')}
          />
          <span className={`${value === 'yes' ? 'text-customGreen' : 'text-textGray'}`}>예</span>
        </label>
        <label
          htmlFor='no'
          onClick={() => onChange('no')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onChange('no')
            }
          }}
          className={`flex w-[50%] cursor-pointer justify-center rounded-xl border py-2 text-textGray ${
            value === 'no' ? 'border-customGreen text-customGreen' : 'border-buttonGray'
          }`}
        >
          <input
            type='radio'
            value='no'
            id='no'
            className='hidden'
            checked={value === 'no'}
            onChange={() => onChange('no')}
          />
          <span className={`${value === 'no' ? 'text-customGreen' : 'text-textGray'}`}>아니오</span>
        </label>
      </div>

      {errors.hasEdu && <p className='text-red-500'>{`* ${errors.hasEdu.message}`}</p>}
    </main>
  )
}
