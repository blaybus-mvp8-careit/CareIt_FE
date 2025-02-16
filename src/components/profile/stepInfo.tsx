import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

interface StepInfoProps {
  nextStep: () => void
}

export default function StepInfo({ nextStep }: StepInfoProps) {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const buttonColor =
    type === 'care'
      ? 'bg-customGreen hover:bg-customLightGreen'
      : 'bg-customBlue hover:bg-customLightBlue'
  const textColor = type === 'care' ? 'text-customGreen' : 'text-customBlue'

  return (
    <main className='flex h-full w-full flex-col items-center justify-center gap-16'>
      <Image src='/icon/profile-register.svg' alt='icon' width={200} height={200} />
      <div className='flex w-full flex-col items-center justify-center gap-6'>
        <span className='text-textGray'>가입을 완료했어요</span>
        <div className='flex flex-col items-center'>
          <p className={`${textColor} text-xl font-bold`}>1분만에 프로필을 입력하면</p>
          <p className='text-xl font-bold'>바로 매칭이 시작돼요</p>
        </div>
        <button
          type='button'
          onClick={nextStep}
          className={`${buttonColor} w-full rounded-xl py-4 font-bold text-white`}
        >
          프로필 등록하기
        </button>
      </div>
    </main>
  )
}
