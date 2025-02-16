'use client'

import styled from 'styled-components'
import { AntdTitle } from '@/components'
import { Colors } from '@/const'
import { Flex } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import MatchCard from '@/components/matchCard/mathCard'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
`


const Header = styled.div`
  width: 100%;
  height: 60px;
  background: ${Colors.VibrantTeal};
  display: flex;
  justify-content:center;
`

const StyledTitle = styled(AntdTitle)`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function HistoryPage() {
  const handleClick = () => {
    
  }

  return (
    <Container>
      <Header>
        <Flex align='center' justify='center' style={{ flex: 1 }}>
          <ArrowLeftOutlined style={{ color: Colors.White, fontSize: '20px' }} />
        </Flex>
        <StyledTitle level={3} color={Colors.White}>
          매칭 히스토리
        </StyledTitle>
        <div style={{ flex: 1 }}></div>
      </Header>
      <Flex vertical gap={30} style={{ padding: '20px 30px' }}>
        <Flex vertical gap={20}>
          <MatchCard type={'history'} onClick={handleClick} />
          <MatchCard type={'history'} onClick={handleClick} />
        </Flex>
      </Flex>
    </Container>
  )
}
