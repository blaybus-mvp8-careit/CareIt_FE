import React, { JSX } from 'react';
import { TitleProps } from 'antd/es/typography/Title';
import { styled } from 'styled-components';
import { Typography } from 'antd';


export const StyledTitle = styled(Typography.Title)`
  margin: 0 !important;
`


interface CustomTitleProps extends TitleProps {
  children: React.ReactNode;
}

export default function AntdTitle({ children, ...rest }: CustomTitleProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledTitle {...rest}>{children}</StyledTitle>
};
