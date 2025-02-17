'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Header from '@/components/Header/Header'
import MatchingRequestCarousel from './components/MatchingRequestSwiper'
import { Flex } from 'antd'
import { Colors } from '@/const'

export default function Home() {
  return (
    <Container>
      <Header type='admin' />
      <CardContainer>
        <Flex gap={10} style={{ width:'85%',padding: '10px',marginTop:'50px', background:Colors.White, borderRadius:'10px' }}>
          <Flex vertical gap={10}>
            <Card>어르신 정보 등록하기</Card>
            <Card>활동조건 설정하기</Card>
          </Flex>

          <Flex>
            <RecommendImage
              src='/exmatchingimg.svg'
              alt='요양보호사 추천'
              width={150}
              height={150}
            />
          </Flex>
        </Flex>
      </CardContainer>

      <MatchingRequestCarousel />

      <Footer>
        <FooterItem>홈</FooterItem>
        <FooterItem>매칭</FooterItem>
        <FooterItem>마이페이지</FooterItem>
      </Footer>
    </Container>
  )
}

/* styled-components 정의 */
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

/* 메인 콘텐츠 */
const CardContainer = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  height: 350px;
  background: linear-gradient(to bottom, ${Colors.VividBlue}, ${Colors.White});
`

const Card = styled.div`
  flex: 1;
  background-color: ${Colors.VividBlue};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`

/* 요양보호사 추천 섹션 */
const RecommendImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`


/* 푸터 */
const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  border-top: 1px solid #ccc;
  background-color: #fafafa;
`

const FooterItem = styled.div`
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #02b68a;
  }
`
