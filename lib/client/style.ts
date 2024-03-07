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

export const Title = styled.h1`
  font-size: var(--text-4xl);
  font-weight: bold;
`;

export const Description = styled.span`
  font-weight: 500;
  color: var(--color-description);
`;

export const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Prose = styled.article`
  width: 100%;

  h1 {
    margin-bottom: 1.5rem; /* 24px */
  }

  h2 {
    margin-bottom: 1.5rem; /* 24px */
  }

  h3 {
    margin-bottom: 1.25rem; /* 20px */
  }

  p,
  ul,
  ol {
    margin-top: -0.5rem; /* 8px */
    margin-bottom: 2rem; /* 32px */
    line-height: 2;
    color: var(--color-paragraph);

    ::after {
      display: block;
      margin-top: -0.5rem; /* 8px */
      font-size: 0;
      content: '-';
    }
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  li ul,
  li ol {
    margin-top: 0;
    margin-bottom: 0;

    ::after {
      display: none;
    }
  }

  li > :first-child {
    margin-top: 0;
  }

  li > :last-child {
    ::after {
      display: none;
    }
  }

  a {
    text-decoration: underline;
  }

  a:has(strong) {
    text-decoration: underline wavy;
    text-underline-offset: 1px;
  }

  figure,
  blockquote {
    margin-bottom: 2rem; /* 32px */
  }

  & > :last-child,
  li > :last-child,
  blockquote > :last-child {
    margin-bottom: 0 !important;
  }

  table {
    display: block;
    margin-bottom: 2rem; /* 32px */
    overflow-x: auto;
    line-height: 1;
    white-space: nowrap;
  }

  thead {
    background-color: var(--color-secondary);
  }

  th,
  td {
    padding: 0.75rem 1rem;
    text-align: left;
  }

  td {
    border-bottom: 2px solid var(--color-secondary);
  }
`;
