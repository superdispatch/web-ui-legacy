import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon, MenuOpen, MoreHoriz } from '@material-ui/icons';
import {
  AdaptiveVerticalToolbar,
  Color,
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
`;

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;

  overflow: hidden;
  padding-top: 16px;
  background: #1b2638;
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
  color: ${Color.Silver500};

  &&:focus {
    background-color: inherit;
  }
`;

const Footer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  margin: 16px 0 8px;
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
    color: ${Color.Dark100};
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

  &[aria-expanded='false'] {
    ${NavbarBadge}, ${NavbarLabel} {
      visibility: hidden;
    }
  }
`;

export interface NavbarItemOptions extends NavbarItemProps {
  key: Key;
  groupKey?: Key;
  hide?: boolean;
}

interface NavbarListProps {
  header: ReactNode;
  items: NavbarItemOptions[];
  footer?: ReactNode;
}

export function NavbarList({
  header,
  items,
  footer,
}: NavbarListProps): ReactElement {
  const platform = useResponsiveValue('mobile', 'tablet', 'desktop');
  const isMobile = platform === 'mobile';

  const { isExpanded, isDrawerOpen, setDrawerOpen, setIsExpanded } =
    useNavbarContext();

  const isSidebarOpened = isMobile ? isDrawerOpen : isExpanded;

  const filteredItems: NavbarItemOptions[] = useMemo(
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
            style={isExpanded ? { paddingRight: 0 } : {}}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? <MenuOpen /> : <MenuIcon />}
          </ExpandIconButton>
        )}
      </Header>

      <Content aria-expanded={isSidebarOpened}>
        <AdaptiveVerticalToolbar
          disableGutters={true}
          items={filteredItems}
          renderItem={(item) => {
            const navbarItem = item as NavbarItemOptions;
            const index = filteredItems.indexOf(navbarItem);
            const prev = filteredItems[index - 1];

            return (
              <NavbarItem
                {...item}
                onClick={(event) => {
                  item.onClick?.(event);

                  if (!event.isDefaultPrevented()) {
                    setDrawerOpen(false);
                  }
                }}
                paddedTop={prev && prev.groupKey !== navbarItem.groupKey}
              />
            );
          }}
          renderMenuItem={(item) => (
            <NavbarMenuItem
              {...item}
              onClick={(event) => {
                item.onClick?.(event);
                if (!event.isDefaultPrevented()) {
                  setDrawerOpen(false);
                }
              }}
            />
          )}
          moreElement={<NavbarItem icon={<MoreHoriz />} label="More" />}
        />
      </Content>

      <Footer>{footer}</Footer>
    </Wrapper>
  );
}
