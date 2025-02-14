import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()

  return (
    <div className='relative flex items-center border-b border-b-[#02b68a] p-[19px]'>
      <ArrowLeftOutlined
        onClick={() => router.back()}
        className='absolute top-1/2 -translate-y-1/2 text-[27px] text-[#31c4a0]'
      />
      <h1 className='mx-auto bg-gradient-to-r from-[#31c4a0] to-[#018eba] bg-clip-text text-center text-xl font-bold text-transparent'>
        가입하기
      </h1>
    </div>
  )
}
export default Header
