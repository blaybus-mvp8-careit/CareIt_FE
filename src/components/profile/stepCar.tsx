import { useFormContext, useController } from 'react-hook-form'

interface StepCarProps {
  type: string | null
}

export default function StepCar({ type }: StepCarProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const {
    field: { value, onChange },
  } = useController({
    name: 'hasCar',
    control,
    rules: { required: '차량 여부를 선택해주세요.' },
  })

  const textColor = type === 'care' ? 'text-customGreen' : 'text-customBlue'
  const borderColor = type === 'care' ? 'border-customGreen' : 'border-customBlue'

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className={`${textColor}`}>Q. </span>차량을 소유하고 계신가요?
        <span className={`${textColor} text-sm`}> (필수) </span>
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
            value === 'yes' ? `${borderColor}` : 'border-buttonGray'
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
          <span className={`${value === 'yes' ? `${textColor}` : 'text-textGray'}`}>예</span>
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
            value === 'no' ? `${borderColor}` : 'border-buttonGray'
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
          <span className={`${value === 'no' ? `${textColor}` : 'text-textGray'}`}>아니오</span>
        </label>
      </div>

      {errors.hasCar && <p className='text-red-500'>{`* ${errors.hasCar.message}`}</p>}
    </main>
  )
}
