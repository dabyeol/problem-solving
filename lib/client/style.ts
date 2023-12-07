'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: flex-start;
  justify-content: center;
  width: 1192px;
  padding: 32px;

  @media (width < 1200px) {
    width: 100%;
  }

  @media (width < 810px) {
    gap: 48px;
    padding: 24px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const List = styled(Section)`
  @media (width < 810px) {
    gap: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: min-content;
  gap: 24px;
  width: 100%;

  @media (width < 810px) {
    gap: 16px;
  }
`;

export const Description = styled.span`
  font-weight: 500;
  color: var(--color-description);
`;

export const Prose = styled.article`
  width: 100%;

  h1 {
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1.25rem;
  }

  p,
  ul,
  ol {
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
    line-height: 2;
    color: var(--color-paragraph);
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  a strong {
    text-decoration: underline wavy;
    text-underline-offset: 1px;
  }

  [data-rehype-pretty-code-fragment] {
    margin-bottom: 2rem; /* 32px */
  }

  & > :last-child {
    margin-bottom: 0 !important;
  }
`;
