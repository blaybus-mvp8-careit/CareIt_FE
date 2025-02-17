import Link from 'next/link'

function Header() {
  return (
    <div className='border-b border-b-[#02b68a] p-[19px]'>
      <Link
        href='/'
        className='bg-gradient-to-r from-[#31c4a0] to-[#018eba] bg-clip-text text-3xl font-bold text-transparent'
      >
        돌봄잇
      </Link>
    </div>
  )
}
export default Header
