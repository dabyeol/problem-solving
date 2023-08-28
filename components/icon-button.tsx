import styled from '@emotion/styled';
import Image from 'next/image';

const Button = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--background-light);
  overflow: hidden;
  align-content: center;
  flex-wrap: nowrap;
  gap: 16px;
  border-radius: 16px;
  cursor: pointer;
`;

const Icon = styled(Image)`
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 100%;
`;

const Text = styled.h6`
  flex: 1;
  text-align: center;
`;

interface LoginButtonProps {
  src: string;
  text: string;
  onClick?: () => void;
}

export default function LoginButton({ src, text, onClick }: LoginButtonProps) {
  return (
    <Button onClick={onClick}>
      <Icon src={src} width={24} height={24} alt="Icon" priority />
      <Text>{text}</Text>
    </Button>
  );
}
