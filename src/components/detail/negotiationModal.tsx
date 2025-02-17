import { PhoneFilled } from '@ant-design/icons'

interface NegotiationModalProps {
  isOpen: boolean
  onClose: () => void
  center: string
  centerPhone: string
}

export default function NegotiationModal({
  isOpen,
  onClose,
  center,
  centerPhone,
}: NegotiationModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#3c3c3c85]'>
      <div className='w-[90%] max-w-[350px] rounded-2xl bg-white p-6 shadow-lg'>
        <h1 className='text-xl font-bold'>{center}</h1>
        <div className='mb-4 mt-2 flex gap-2'>
          <PhoneFilled />
          <p>{centerPhone}</p>
        </div>
        <div className='flex w-full gap-4'>
          <button
            type='button'
            className='w-1/2 rounded-full bg-buttonGray py-1 font-semibold hover:bg-gray-300'
            onClick={onClose}
          >
            닫기
          </button>
          <button
            type='button'
            className='w-1/2 rounded-full bg-customGreen font-semibold text-white hover:bg-customLightGreen'
            onClick={onClose}
          >
            전화하기
          </button>
        </div>
      </div>
    </div>
  )
}
