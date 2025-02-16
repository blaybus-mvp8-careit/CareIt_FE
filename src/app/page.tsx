'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { AntdTitle } from '@/components'
import { useEffect } from 'react'
import { sleep } from '@/hooks'
import { useRouter } from 'next/navigation'
import { Colors } from '@/const'

//Todo - 최상단에서 100%
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.VibrantTeal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledTitle = styled(AntdTitle)`
  && {
    color: ${Colors.White};
  }
`

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const route = async () => {
      await sleep(1500)
      router.push('/select')
    }

    route()
  }, [router])

  return (
    <Container>
      <Image src='/main_logo.svg' alt='Main Logo' width={120} height={120} />
      <StyledTitle level={2}>돌봄잇</StyledTitle>
    </Container>
  )
}
