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
  type: string | null
}

export default function StepForm({ step, nextStep, type }: StepFormProps) {
  // 프로필 등록 단계별 입력 폼 지정 함수(요양 보호사 version)
  const renderCareStepForm = () => {
    switch (step) {
      case 1:
        return <StepInfo nextStep={nextStep} type={type} />
      case 2:
        return <StepName type={type} />
      case 3:
        return <StepPhone type={type} />
      case 4:
        return <StepCertificate />
      case 5:
        return <StepAddress type={type} />
      case 6:
        return <StepCar type={type} />
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
        return <StepInfo nextStep={nextStep} type={type} />
      case 2:
        return <StepName type={type} />
      case 3:
        return <StepPhone type={type} />
      case 4:
        return <StepAddress type={type} />
      case 5:
        return <StepCar type={type} />
      default:
        return <div>완료</div>
    }
  }

  return type === 'care' ? renderCareStepForm() : renderCenterStepForm()
}
