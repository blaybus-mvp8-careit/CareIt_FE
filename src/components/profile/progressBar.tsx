interface ProgressBarProps {
  step: number
  totalSteps: number
  type: string | null
}

export default function ProgressBar({ step, totalSteps, type }: ProgressBarProps) {
  const buttonColor =
    type === 'care'
      ? 'bg-customGreen hover:bg-customLightGreen'
      : 'bg-customBlue hover:bg-customLightBlue'

  const progressPercentage = (step / totalSteps) * 100 // 진행률 계산

  return (
    <div className='h-2 w-full rounded-full bg-barGray'>
      <div
        className={`${buttonColor} h-2 rounded-full transition-all duration-300`}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  )
}
