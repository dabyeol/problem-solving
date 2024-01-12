'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

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
