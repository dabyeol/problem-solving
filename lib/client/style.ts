'use client';

import styled from '@emotion/styled';

export const Container = styled.div<{ row?: boolean }>`
  width: 1176px;
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  z-index: 1;

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 809px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const Wrapper = styled.div<{
  row?: boolean;
  loose?: boolean;
  column?: number;
}>`
  width: ${({ column }) =>
    column ? `${column * 72 + (column - 1) * 24}px` : '100%'};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: center;
  align-items: flex-start;
  gap: ${({ loose }) => (loose ? '48px' : '24px')};

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 809px) {
    gap: ${({ loose }) => (loose ? '32px' : '16px')};
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 809px) {
    gap: 12px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: min-content;
  gap: 24px;

  @media (max-width: 809px) {
    gap: 16px;
  }
`;

export const Description = styled.span`
  font-weight: 500;
  color: var(--text-secondary);
`;

export const Caption = styled.div`
  font-size: 0.875rem; // 14px

  @media (max-width: 809px) {
    font-size: 0.75rem; // 12px
  }
`;

export const MDXLayout = styled.div`
  width: 100%;

  & > :last-child,
  & > :last-child > * {
    margin-bottom: 0 !important;
  }

  @media (max-width: 1199px) {
    width: 100%;
  }
`;
