'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: var(--text-xs);
  font-weight: bold;
  color: #fff;
  vertical-align: middle;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;

interface Props {
  color: string;
  value?: number | string;
}

export default function Level({ color, value }: Props) {
  return <Wrapper color={color}>{value}</Wrapper>;
}
