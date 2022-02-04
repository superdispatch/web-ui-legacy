import { Color } from '@superdispatch/ui';
import {
  ComponentType,
  CSSProperties,
  HTMLAttributes,
  Key,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';

export const NavbarBadge = styled.span<{
  backgroundColor?: string;
}>`
  flex-shrink: 0;
  padding: 4px 6px;
  min-width: 20px;
  line-height: 12px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  text-align: center;
  color: ${({ backgroundColor }) =>
    backgroundColor ? Color.White : 'inherit'};
  background: ${({ backgroundColor }) => backgroundColor || '#131c2a'};
`;

export const NavbarLabel = styled.span`
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const NavbarItemRoot = styled.div<{
  paddedTop?: boolean;
  disableHover?: boolean;
}>`
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

  ${({ disableHover }: { disableHover?: boolean }) =>
    !disableHover &&
    css`
      &:hover,
      &[aria-current] {
        background-color: #2f394a;
        color: ${Color.White};
        border-left-color: ${Color.Blue300};
      }
    `}

  & > img,
  & > svg {
    width: 24px;
    margin-right: 8px;
  }
`;

export interface NavbarItemOptions {
  key: Key;
  label: ReactNode;
  groupKey?: string | number;

  onClick?: (event: MouseEvent<HTMLElement>) => void;
  component?: ComponentType<HTMLAttributes<HTMLElement>>;

  icon?: ReactNode;
  badge?: ReactNode;
  hide?: boolean;

  disableHover?: boolean;
  paddedTop?: boolean;
  paddedLeft?: boolean;
  backgroundColor?: string;
}

interface NavbarItemProps extends Omit<NavbarItemOptions, 'key'> {
  style?: CSSProperties;
}

export function NavbarItem({
  label,
  paddedLeft,
  paddedTop,
  backgroundColor,
  badge,
  icon,
  component,
  onClick,
  disableHover,
  style,
}: NavbarItemProps): ReactElement {
  return (
    <NavbarItemRoot
      disableHover={disableHover}
      onClick={onClick}
      as={component}
      style={{
        marginTop: paddedTop ? '16px' : '0',
        paddingLeft: paddedLeft ? '52px' : '20px',
        ...style,
      }}
    >
      {icon}

      <NavbarLabel>{label}</NavbarLabel>

      {badge != null && (
        <NavbarBadge data-cypress="count" backgroundColor={backgroundColor}>
          {badge}
        </NavbarBadge>
      )}
    </NavbarItemRoot>
  );
}
