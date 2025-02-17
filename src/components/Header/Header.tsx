import { Colors } from '@/const'
import Link from 'next/link'

type Props = {
  type: 'admin' | 'user'
}

function Header({ type }: Props) {
  const textColor = type === 'admin' ? Colors.VividBlue : Colors.VibrantTeal

  return (
    <div className='border-b border-b-[#02b68a] p-[19px]'>
      <Link href='/'>
        <span style={{ color: textColor }} className='text-3xl font-bold'>
          돌봄잇
        </span>
      </Link>
    </div>
  )
}

export default Header
