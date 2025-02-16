import React, { JSX } from 'react'
import { TitleProps } from 'antd/es/typography/Title'
import { styled } from 'styled-components'
import { Typography } from 'antd'

interface CustomTitleProps extends TitleProps {
  children: React.ReactNode
  color?: string
}

export const StyledTitle = styled(Typography.Title)<{ $customColor?: string }>`
  margin: 0 !important;
  color: ${({ $customColor }) => $customColor || 'inherit'} !important;
`

export default function AntdTitle({ children, color, ...rest }: CustomTitleProps): JSX.Element {
  return (
    <StyledTitle $customColor={color} {...rest}>
      {children}
    </StyledTitle>
  )
}
