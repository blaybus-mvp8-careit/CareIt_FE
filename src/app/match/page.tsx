'use client'

import styled from 'styled-components'
import { AntdTitle } from '@/components'
import { Colors } from '@/const'
import { Button, Flex, Modal } from 'antd'
import { ArrowLeftOutlined, PhoneFilled } from '@ant-design/icons'
import { useState } from 'react'
import { MatchType } from '@/types'
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

export default function MatchPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState<MatchType>('tuning')

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <Container>
      <Header>
        <Flex align='center' justify='center' style={{ flex: 1 }}>
          <ArrowLeftOutlined style={{ color: Colors.White, fontSize: '20px' }} />
        </Flex>
        <StyledTitle level={3} color={Colors.White}>
          내가 받은 요청 목록
        </StyledTitle>
        <div style={{ flex: 1 }}></div>
      </Header>
      <Flex vertical gap={30} style={{ padding: '20px 30px' }}>
        <Flex gap={10}>
          <Button
            style={{
              background: type === 'tuning' ? Colors.MintGreen : Colors.White,
              color: type === 'tuning' ? Colors.White : Colors.MintGreen,
              width: '90px',
              height: '35px',
              borderRadius: '50px',
            }}
            onClick={() => setType('tuning')}
          >
            조율
          </Button>
          <Button
            style={{
              background: type === 'matching' ? Colors.VibrantTeal : Colors.White,
              color: type === 'matching' ? Colors.White : Colors.VibrantTeal,
              width: '90px',
              height: '35px',
              borderRadius: '50px',
            }}
            onClick={() => setType('matching')}
          >
            매칭
          </Button>
        </Flex>
        <Flex vertical gap={20}>
          <MatchCard type={type} onClick={handleClick} />
          <MatchCard type={type} onClick={handleClick} />
        </Flex>
      </Flex>
      <Modal
        title='노원구 돌봄센터'
        open={isOpen}
        onOk={async () => {
          setIsOpen(false)
        }}
        onCancel={() => setIsOpen(false)}
        centered
        footer={
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              style={{
                backgroundColor: Colors.LightGrey,
                width: '50%',
              }}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              닫기
            </Button>
            <Button
              style={{
                backgroundColor: Colors.VibrantTeal,
                borderColor: Colors.MintGreen,
                color: Colors.White,
                width: '50%',
              }}
              onClick={() => setIsOpen(false)}
            >
              전화하기
            </Button>
          </div>
        }
      >
        <Flex gap={10}>
          <PhoneFilled />
          010-1992-2121
        </Flex>
      </Modal>
    </Container>
  )
}
