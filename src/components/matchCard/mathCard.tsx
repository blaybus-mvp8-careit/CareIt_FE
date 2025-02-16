'use client'

import { styled } from 'styled-components'
import Image from 'next/image'
import { Colors } from '@/const'
import { AntdText, AntdTitle } from '@/components'
import { Button, Flex } from 'antd'
import { CloseOutlined, RightOutlined } from '@ant-design/icons'
import { MatchType } from '@/types'

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`

interface InfoContainerProps {
  type: MatchType
}

const InfoContainer = styled.div<InfoContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ type }) => {
    if (type === 'tuning') return Colors.MintGreen
    if (type === 'matching') return Colors.VibrantTeal
    return Colors.White
  }};
  border: 1px solid
    ${({ type }) => {
      if (type === 'tuning') return Colors.MintGreen
      if (type === 'matching') return Colors.VibrantTeal
      if (type === 'history') return Colors.VibrantTeal
      return 'gray'
    }};
  border-radius: 15px;
  padding: 10px;
  gap: 5px;
`

interface Props {
  type: MatchType
  onClick: () => void
}

export default function MatchCard({ type, onClick }: Props) {
  const titleColor = type === 'tuning' ? 'black' : type === 'matching' ? 'white' : 'black'
  const textColor = titleColor
  const buttonText = type === 'tuning' ? '조율하기' : type === 'matching' ? '조회하기' : ''
  const buttonColor =
    type === 'tuning'
      ? Colors.MintGreen
      : type === 'matching'
        ? Colors.VibrantTeal
        : Colors.MintGreen

  const Icon =
    type === 'tuning' ? (
      <CloseOutlined style={{ fontSize: '12px' }} />
    ) : (
      <RightOutlined
        style={{
          fontSize: '12px',
          color: type === 'matching' ? Colors.White : Colors.VibrantTeal,
        }}
      />
    )

  return (
    <Container onClick={onClick}>
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <Image
          src='/main_logo.svg'
          alt='Main Logo'
          fill
          style={{ borderRadius: '15px', objectFit: 'cover' }}
        />
      </div>
      <InfoContainer type={type}>
        <Flex justify='space-between'>
          <AntdTitle color={titleColor} level={5}>
            노원구 돌봄센터
          </AntdTitle>
          {Icon}
        </Flex>
        <AntdText color={textColor}>수,목 (협의가능)/4시~6시</AntdText>
        <Button
          style={{
            color: buttonColor,
            borderColor: type === 'history' ? Colors.VibrantTeal : undefined,
            width: '100px',
            height: '20px',
            borderRadius: '20px',
          }}
        >
          {buttonText}
        </Button>
      </InfoContainer>
    </Container>
  )
}
