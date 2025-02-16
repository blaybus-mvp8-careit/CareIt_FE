import React, { JSX } from 'react'
import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import { styled } from 'styled-components'

interface CustomTextProps extends TextProps {
  children: React.ReactNode
  color?: string
}

export const StyledText = styled(Typography.Text)<{ $customColor?: string }>`
  margin: 0 !important;
  color: ${({ $customColor }) => $customColor || 'inherit'} !important;
`

export default function AntdText({ children, color, ...rest }: CustomTextProps): JSX.Element {
  return (
    <StyledText $customColor={color} {...rest}>
      {children}
    </StyledText>
  )
}
