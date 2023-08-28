import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.button<{
  primary?: boolean;
  large?: boolean;
}>`
  width: ${props => (props.large ? '100%' : 'auto')};
  height: ${props => (props.large ? '56px' : '40px')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props =>
    props.primary
      ? props.large
        ? '0px 2px 8px 0px rgba(0, 0, 0, 0.25)'
        : '0px 1px 4px 0px rgba(0, 0, 0, 0.25)'
      : 'none'};
  background-color: var(
    ${props => (props.primary ? '--primary' : '--secondary')}
  );
  padding: 0px ${props => (props.large ? '48px' : '24px')};
  border-radius: ${props => (props.large ? '16px' : '8px')};
  color: var(${props => (props.primary ? '--text-primary' : '--text')});
  border: none;
  cursor: pointer;

  @media (max-width: 809px) {
    height: ${props => (props.large ? '56px' : '36px')};
    padding: 0px ${props => (props.large ? '32px' : '20px')};
  }
`;

const Text = styled.span<{ primary?: boolean; large?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: ${props => (props.primary ? '600' : '500')};

  & > svg {
    width: 1rem; // 16px
    height: 1rem; // 16px
  }

  @media (max-width: 809px) {
    gap: 6px;
    font-size: ${props => (props.large ? '1rem' : '0.875rem')}; // 16px, 14px

    & > svg {
      width: 0.875rem; // 14px
      height: 0.875rem; // 14px
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
