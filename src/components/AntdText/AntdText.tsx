import React, { JSX } from 'react';
import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text';
import { styled } from 'styled-components';


export const StyledText = styled(Typography.Text)`
  margin: 0 !important;
`

export default function AntdText(props: TextProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledText {...props} />
}
