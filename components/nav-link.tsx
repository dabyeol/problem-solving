'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Wrapper = styled(Link)<{ selected: boolean }>`
  color: ${props =>
    props.selected ? 'var(--color-text)' : 'var(--color-description)'};
`;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Wrapper href={href} selected={href === pathname}>
      {children}
    </Wrapper>
  );
}
