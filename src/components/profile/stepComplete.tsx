import Image from 'next/image'
import Link from 'next/link'

interface StepCompleteProps {
  type: string | null
}

export default function StepComplete({ type }: StepCompleteProps) {
  const buttonColor =
    type === 'care'
      ? 'bg-customGreen hover:bg-customLightGreen'
      : 'bg-customBlue hover:bg-customLightBlue'
  const textColor = type === 'care' ? 'text-customGreen' : 'text-customBlue'

  return (
    <main className='flex h-full w-full flex-col items-center justify-between pb-10'>
      <div className='flex h-full flex-col items-center justify-center'>
        <Image src='/icon/logo.svg' alt='logo' width={200} height={200} />
        <p className={`${textColor} mb-2 mt-10 font-semibold`}>프로필 등록 완료 !</p>
        {/* Todo : api 연결 후 이름 받아오기 */}
        {/* <h1>{`${name}님, 환영해요`}</h1> */}
        <h1 className='text-xl font-bold'>사용자님, 환영해요</h1>
      </div>
      <Link
        href='/login'
        className={`${buttonColor} w-full rounded-xl py-4 text-center font-bold text-white`}
      >
        확인
      </Link>
    </main>
  )
}
