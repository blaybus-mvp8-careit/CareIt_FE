'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { AntdTitle } from '@/components'
import { Colors } from '@/const'
import { Button, Flex } from 'antd'
import { useRouter } from 'next/navigation'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledTitle = styled(AntdTitle)`
  && {
    color: ${Colors.VibrantTeal};
  }
`

export default function SelectPage() {
    const router = useRouter()

    const handleNavigate = (path: string) => {
      //Todo - 로그인 토큰 체크 후 메인 페이지
      router.push(path)
    }

    return (
    <Container>
        <Image src='/main_logo.svg' alt='Main Logo' width={120} height={120} />
        <StyledTitle level={2}>돌봄잇</StyledTitle>
        <Flex vertical gap={30}>
            <Button
            style={{
                background: Colors.VibrantTeal,
                color: Colors.White,
                width: '300px',
                height: '60px',
            }}
            onClick={() => handleNavigate('/care')}
            >
            요양보호사 시작하기
            </Button>
            <Button
            style={{
                background: Colors.VividBlue,
                color: Colors.White,
                width: '300px',
                height: '60px',
            }}
            onClick={() => handleNavigate('/center')}
            >
            센터 시작하기
            </Button>
        </Flex>
    </Container>
    )
}
