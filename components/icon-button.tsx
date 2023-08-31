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
  gap: 12px;
  border-radius: 16px;
  cursor: pointer;
`;

const Icon = styled(Image)`
  overflow: hidden;
  border-radius: 100%;
`;

const Text = styled.span`
  font-weight: 600;
  flex: 1;
`;

interface IconButtonProps {
  src: string;
  text: string;
  onClick?: () => void;
}

export default function IconButton({ src, text, onClick }: IconButtonProps) {
  return (
    <Button onClick={onClick}>
      <Icon src={src} width={24} height={24} alt="Icon" priority />
      <Text>{text}</Text>
    </Button>
  );
}
