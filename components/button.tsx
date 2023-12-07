import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.button<{
  primary?: boolean;
  large?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ large }) => (large ? '100%' : 'auto')};
  height: ${({ large }) => (large ? '56px' : '40px')};
  padding: 0 ${({ large }) => (large ? '48px' : '24px')};
  color: ${({ primary }) =>
    primary ? 'var(--color-text-alt)' : 'var(--color-text)'};
  background-color: ${({ primary }) =>
    primary ? 'var(--color-primary)' : 'var(--color-secondary)'};
  border: none;
  border-radius: ${({ large }) => (large ? '16px' : '8px')};

  @media (width < 810px) {
    height: ${({ large }) => (large ? '56px' : '36px')};
    padding: 0 ${({ large }) => (large ? '32px' : '20px')};
  }
`;

const Text = styled.span<{ primary?: boolean; large?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-weight: ${props => (props.primary ? '600' : '500')};

  & > svg {
    width: 1rem; /* 16px */
    height: 1rem; /* 16px */
  }

  @media (width < 810px) {
    gap: 6px;
    font-size: ${props => (props.large ? '1rem' : '0.875rem')}; /* 16px 14px */

    & > svg {
      width: 0.875rem; /* 14px */
      height: 0.875rem; /* 14px */
    }
  }
`;

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  primary?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  large?: boolean;
}

export default function Button({
  onClick,
  children,
  primary,
  type,
  large,
}: ButtonProps) {
  return (
    <Wrapper onClick={onClick} type={type} primary={primary} large={large}>
      <Text primary={primary} large={large}>
        {children}
      </Text>
    </Wrapper>
  );
}
