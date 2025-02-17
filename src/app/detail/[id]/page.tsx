import ImageSection from '@/components/detail/imageSection'
import InfoSection from '@/components/detail/infoSection'

export default function DetailPage() {
  return (
    <main className='relative h-screen w-full'>
      <ImageSection />
      <article className='absolute bottom-0 w-full rounded-t-2xl bg-[#FFFFFFE6] p-6'>
        <InfoSection />
      </article>
    </main>
  )
}
