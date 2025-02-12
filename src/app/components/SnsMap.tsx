import Image from 'next/image'

interface SnsIcon {
  id: number
  imageSrc: string
  alt: string
}
const snsIcon: SnsIcon[] = [
  { id: 1, imageSrc: '/kakaoIcon.svg', alt: '카카오아이콘' },
  { id: 2, imageSrc: '/mailIcon.svg', alt: '메일일아이콘' },
  { id: 3, imageSrc: '/appleIcon.svg', alt: '애플아이콘' },
]

export default function SnsMap() {
  return (
    <div className='mt-[18px] flex items-center justify-center gap-6'>
      {snsIcon.map((data) => (
        <Image
          key={data.id}
          src={data.imageSrc}
          alt={data.alt}
          className=''
          width={37}
          height={37}
        />
      ))}
    </div>
  )
}
