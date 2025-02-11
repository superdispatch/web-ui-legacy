import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon, MenuOpen } from '@material-ui/icons';
import {
  Color,
  ColorDark,
  ColorDynamic,
  Inline,
  useResponsiveValue,
} from '@superdispatch/ui';
import {
  ComponentType,
  HTMLAttributes,
  Key,
  MouseEvent,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { NavbarAccordion, NavbarAccordionProps } from './NavbarAccordion';
import { useNavbarContext } from './NavbarContext';
import {
  NavbarBadge,
  NavbarItem,
  NavbarItemProps,
  NavbarLabel,
} from './NavbarItem';

const Header = styled.div`
  margin: 0 16px 8px;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  position: sticky;
`;

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;

  overflow: hidden;
  padding-top: 16px;
  background: ${({ theme }) =>
    theme.palette.type === 'dark' ? ColorDark.White : Color.Dark500};
  transition: width 0.3s linear;

  height: 100%;
  width: ${({ isMobile }) => (isMobile ? '280px' : 'initial')};

  &[data-expanded='true'] {
    width: ${({ isMobile }) => (isMobile ? '280px' : '240px')};
  }

  &[data-expanded='false'] {
    width: ${({ isMobile }) => (isMobile ? '280px' : '72px')};

    & > ${Header} {
      justify-content: center;
    }
  }
`;

const ExpandIconButton = styled(IconButton)`
  color: ${ColorDynamic.Dark100};

  &&:focus {
    background-color: inherit;
  }
`;

const Footer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  margin: 16px 0 8px;
  position: sticky;
`;

const Root = styled.div`
  color: inherit;
  background-color: unset;
  border-left: unset;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  padding: 8px 16px;

  svg {
    font-size: 24px;
    color: ${ColorDynamic.Dark100};
  }
`;

interface NavbarMenuItemProps {
  icon?: ReactNode;
  label: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  component?: ComponentType<HTMLAttributes<HTMLElement>>;
}

export function NavbarMenuItem({
  label,
  icon,
  onClick,
  component,
}: NavbarMenuItemProps): ReactElement {
  return (
    <Root as={component} onClick={onClick}>
      <Inline space="xsmall" verticalAlign="center">
        {icon}

        <NavbarLabel>{label}</NavbarLabel>
      </Inline>
    </Root>
  );
}

const Content = styled.div`
  height: 100%;
  min-height: 50px;
  overflow-y: auto;
  overflow-x: hidden;

  &[aria-expanded='false'] {
    ${NavbarBadge}, ${NavbarLabel} {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${ColorDark.Silver500};
    border-radius: 100vw;
    margin-bottom: 100px;
  }
`;

export interface NavbarAccordionOptions extends NavbarAccordionProps {
  key: Key;
  groupKey?: Key;
  hide?: boolean;
}
export interface NavbarItemOptions extends NavbarItemProps {
  key: Key;
  groupKey?: Key;
  hide?: boolean;
}

interface NavbarListProps {
  header: ReactNode;
  items: Array<NavbarItemOptions | NavbarAccordionOptions>;
  footer?: ReactNode;
}

export function NavbarList({
  header,
  items,
  footer,
}: NavbarListProps): ReactElement {
  const platform = useResponsiveValue('mobile', 'tablet', 'desktop');
  const isMobile = platform === 'mobile';

  const { isMenuExpanded, isDrawerOpen, setDrawerOpen, setMenuExpanded } =
    useNavbarContext();

  const isSidebarOpened = isMobile ? isDrawerOpen : isMenuExpanded;

  const filteredItems: Array<NavbarItemOptions | NavbarAccordionOptions> =
    useMemo(
      () =>
        items
          .filter((item) => {
            return !item.hide && (isSidebarOpened || !!item.icon);
          })
          .map((item) => ({
            ...item,
            menuGroupKey: item.groupKey,
          })),
      [items, isSidebarOpened],
    );

  return (
    <Wrapper isMobile={isMobile} data-expanded={isSidebarOpened}>
      <Header>
        {isSidebarOpened && header}

        {!isMobile && (
          <ExpandIconButton
            disableRipple={true}
            style={isMenuExpanded ? { paddingRight: 0 } : {}}
            onClick={() => {
              setMenuExpanded(!isMenuExpanded);
            }}
          >
            {isMenuExpanded ? <MenuOpen /> : <MenuIcon />}
          </ExpandIconButton>
        )}
      </Header>

      <Content aria-expanded={isSidebarOpened}>
        {filteredItems.map((item) => {
          const index = filteredItems.indexOf(item);
          const prev = filteredItems[index - 1];

          if ('items' in item) {
            return (
              <NavbarAccordion
                {...item}
                key={item.key}
                gutter={prev && prev.groupKey !== item.groupKey}
                onClick={item.onClick}
              />
            );
          }
          return (
            <NavbarItem
              {...item}
              key={item.key}
              gutter={prev && prev.groupKey !== item.groupKey}
              onClick={(event) => {
                item.onClick?.(event);

                if (!event.isDefaultPrevented()) {
                  setDrawerOpen(false);
                }
              }}
            />
          );
        })}
      </Content>

      <Footer>{footer}</Footer>
    </Wrapper>
  );
}
