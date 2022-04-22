import { Color, useUID } from '@superdispatch/ui';
import {
  ComponentType,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
import styled from 'styled-components';

export const NavbarBadge = styled.span`
  flex-shrink: 0;
  padding: 4px 6px;
  min-width: 20px;
  line-height: 12px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  text-align: center;
  background: #131c2a;

  &[data-variant='primary'] {
    color: ${Color.White};
    background: ${Color.Blue300};
  }

  &[data-variant='danger'] {
    color: ${Color.White};
    background: ${Color.Red500};
  }
`;

export const NavbarLabel = styled.span`
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const NavbarItemRoot = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  color: #c2c4c9;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  border-left: 4px solid transparent;

  &:hover,
  &[aria-current] {
    background-color: #2f394a;
    color: ${Color.White};
    border-left-color: ${Color.Blue300};
  }

  &[data-active='true'] {
    background-color: #2f394a;
    border-left-color: ${Color.Blue300};
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  margin-right: 8px;

  & svg {
    font-size: 24px;
  }
`;

export interface NavbarItemProps {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  component?: ComponentType<HTMLAttributes<HTMLElement>>;

  label: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  ident?: number;
  gutter?: boolean;
  variant?: 'danger' | 'primary';
  active?: boolean;
}

export function NavbarItem({
  label,
  gutter,
  badge,
  icon,
  component,
  onClick,
  variant,
  ident = 0,
  active,
}: NavbarItemProps): ReactElement {
  const uid = useUID();

  return (
    <NavbarItemRoot
      as={component}
      onClick={onClick}
      aria-labelledby={uid}
      data-active={active}
      style={{
        marginTop: gutter ? '16px' : '0',
        paddingLeft: (ident + 1) * 20,
      }}
    >
      <IconWrapper>{icon}</IconWrapper>

      <NavbarLabel id={uid}>{label}</NavbarLabel>

      {badge != null && (
        <NavbarBadge data-variant={variant}>{badge}</NavbarBadge>
      )}
    </NavbarItemRoot>
  );
}
