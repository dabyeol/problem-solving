'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Level = styled.div<{ color: string }>`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: var(--text-xs);
  font-weight: bold;
  color: #fff;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;

export const Languages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Language = styled(Image)<{ disabled?: boolean }>`
  width: var(--text-2xl);
  height: var(--text-2xl);
  filter: ${({ disabled }) => disabled && 'contrast(50%) opacity(50%)'};
  border-radius: 100%;
`;
