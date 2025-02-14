import { useSearchParams } from 'next/navigation'
import StepInfo from '@/components/profile/stepInfo'
import StepName from '@/components/profile/stepName'
import StepPhone from '@/components/profile/stepPhone'
import StepCertificate from '@/components/profile/stepCertificate'
import StepAddress from '@/components/profile/stepAddress'
import StepCar from '@/components/profile/stepCar'
import StepEdu from '@/components/profile/stepEdu'
import StepIntroduce from '@/components/profile/stepIntroduce'
import StepCareer from '@/components/profile/stepCareer'

interface StepFormProps {
  step: number
  nextStep: () => void
}

export default function StepForm({ step, nextStep }: StepFormProps) {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  // 프로필 등록 단계별 입력 폼 지정 함수(요양 보호사 version)
  const renderCareStepForm = () => {
    switch (step) {
      case 1:
        return <StepInfo nextStep={nextStep} />
      case 2:
        return <StepName />
      case 3:
        return <StepPhone />
      case 4:
        return <StepCertificate />
      case 5:
        return <StepAddress />
      case 6:
        return <StepCar />
      case 7:
        return <StepEdu />
      case 8:
        return <StepIntroduce />
      case 9:
        return <StepCareer />
      default:
        return <div>완료</div>
    }
  }

  // 프로필 등록 단계별 입력 폼 지정 함수(센터 version)
  const renderCenterStepForm = () => {
    switch (step) {
      case 1:
        return <StepInfo nextStep={nextStep} />
      case 2:
        return <StepName />
      case 3:
        return <StepPhone />
      case 4:
        return <StepAddress />
      case 5:
        return <StepCar />
      default:
        return <div>완료</div>
    }
  }

  return type === 'care' ? renderCareStepForm() : renderCenterStepForm()
}
