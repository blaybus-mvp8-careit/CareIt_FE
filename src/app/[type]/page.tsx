"use client"

import { useParams } from 'next/navigation' 
import { Button, Flex } from 'antd'
import React, { JSX, useState } from 'react'
import { Colors } from '@/const'
import { styled } from 'styled-components'
import Image from 'next/image'
import { AntdText, AntdTitle } from '@/components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`

interface StepType {
  logo: JSX.Element
  title: JSX.Element
  subTitle: JSX.Element
}

interface StepData {
  imageSrc: string
  titleLines: string[]
  subtitleLines: string[]
}

const StyledSubTitle = styled(AntdText)`
  && {
    color: ${Colors.VibrantTeal};
  }
`

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d9d9d9;
`

const SelectedDot = styled.div`
  width: 16px;
  height: 5px;
  border-radius: 30%;
  background: ${Colors.VibrantTeal};
`

const commonButtonStyle = { color: 'white', width: '320px', height: '60px' }

export default function TypePage(): JSX.Element {
  const params = useParams()
  const typeParam = typeof params.type === 'string' ? params.type : ''
  const [step, setStep] = useState(0)
  

const stepsData: StepData[] = [
  {
    imageSrc: '/step1.svg',
    titleLines: ['나에게 딱 맞는', '어르신을 찾고 싶다면'],
    subtitleLines: ['매칭시스템으로 적합도 높은 어르신을', '추천받을 수 있어요.'],
  },
  {
    imageSrc: '/step2.svg',
    titleLines: ['자동화된 프로세스로', '매칭 시간 단축'],
    subtitleLines: [
      '서류상에 기재된 복잡한 요구조건들을 일일이 대조하는',
      '과정을 자동화된 프로세스로 빠르게 처리',
    ],
  },
  {
    imageSrc: '/step3.svg',
    titleLines: ['체계적인 정보 관리 시스템'],
    subtitleLines: [
      '구인 시마다 매번 노인 정보를 새로 등록할 필요 없이',
      '디지털환경에서 체계적으로 관리',
    ],
  },
]
  
  
const StepState: StepType[] = stepsData.map((data) => ({
  logo: <Image src={data.imageSrc} alt='Main Logo' width={200} height={200} />,
  title: (
    <Flex vertical align='center' justify='center' style={{ height: '80px' }}>
      {data.titleLines.map((line, idx) => (
        <AntdTitle key={idx} level={2}>
          {line}
        </AntdTitle>
      ))}
    </Flex>
  ),
  subTitle: (
    <Flex vertical align='center' justify='center' style={{ height: '50px' }}>
      {data.subtitleLines.map((line, idx) => (
        <StyledSubTitle key={idx}>{line}</StyledSubTitle>
      ))}
    </Flex>
  ),
}))

  const getButtonStyle = (): React.CSSProperties => {
    if (typeParam === 'care') {
      return { background: Colors.VibrantTeal, ...commonButtonStyle }
    }
    
    if (typeParam === 'center') {
      return { background: Colors.VividBlue, ...commonButtonStyle }
    }

    return {}
  }

  const handleNavigate = () => {
    //Todo - navigate to main page
  }

  const handleClickNext = () => {
    if (step === 2) {
      handleNavigate()
      return
    }

    setStep(prev => prev+1)
  }

  return (
    <Container>
      <Flex align='center' style={{ height: '200px', marginTop:'200px' }}>
        {StepState[step].logo}
      </Flex>
      <Flex vertical gap={10} align='center' justify='center' style={{ height: '300px' }}>
        {StepState[step].title}
        {StepState[step].subTitle}
        <Flex gap={10} align='center' justify='center'>
          {stepsData.map((_, index) =>
            index === step ? (
              <SelectedDot key={index} />
            ) : (
              <Dot key={index} onClick={() => setStep(index)} />
            ),
          )}
        </Flex>
        <Flex vertical style={{ marginTop: 'auto' }}>
          <Button style={getButtonStyle()} onClick={handleClickNext}>
            다음으로
          </Button>
          <Button
            type='text'
            style={{ ...commonButtonStyle, color: Colors.VibrantTeal, background: Colors.White }}
            onClick={handleNavigate}
          >
            건너뛰기
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}
