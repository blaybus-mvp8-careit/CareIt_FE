import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()

  return (
    <div className='relative flex w-full items-center bg-[#02B68A] p-[19px]'>
      <ArrowLeftOutlined
        onClick={() => router.back()}
        className='absolute top-1/2 -translate-y-1/2 text-[27px] text-white'
      />
      <h1 className='mx-auto text-center text-xl font-bold text-white'>
        나를 키워드로 설명해주세요
      </h1>
    </div>
  )
}
export default Header
