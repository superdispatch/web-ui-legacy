import { Color, useUID } from '@superdispatch/ui';
import {
  ComponentType,
  CSSProperties,
  HTMLAttributes,
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

const NavbarItemRoot = styled.div.withConfig<{
  disableHover?: boolean;
}>({
  shouldForwardProp: (prop, defaultFn) =>
    prop !== 'disableHover' && defaultFn(prop),
})`
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

  ${({ disableHover }) =>
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

export interface NavbarItemProps {
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  component?: ComponentType<HTMLAttributes<HTMLElement>>;

  label: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  disableHover?: boolean;
  paddedTop?: boolean;
  paddedLeft?: boolean;
  backgroundColor?: string;
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
  const uid = useUID();

  return (
    <NavbarItemRoot
      disableHover={disableHover}
      onClick={onClick}
      as={component}
      aria-labelledby={uid}
      style={{
        marginTop: paddedTop ? '16px' : '0',
        paddingLeft: paddedLeft ? '52px' : '20px',
        ...style,
      }}
    >
      {icon}

      <NavbarLabel id={uid}>{label}</NavbarLabel>

      {badge != null && (
        <NavbarBadge backgroundColor={backgroundColor}>{badge}</NavbarBadge>
      )}
    </NavbarItemRoot>
  );
}
