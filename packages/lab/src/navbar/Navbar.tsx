import { Drawer, useMediaQuery, useTheme } from '@material-ui/core';
import { ColorDynamic, useResponsiveValue } from '@superdispatch/ui';
import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { NavbarBottomBar, NavbarBottomBarItem } from './NavbarBottomBar';
import { NavbarContext, NavbarContextType } from './NavbarContext';
import { NavbarItemOptions, NavbarList } from './NavbarList';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-right: 1px solid ${ColorDynamic.Silver400};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

interface NavbarProps {
  containerStyle?: CSSProperties;
  children: ReactNode;

  header?: ReactNode;
  items: NavbarItemOptions[];
  bottomItems: NavbarBottomBarItem[];
  footer?: ReactNode;

  hasExtraBadge?: boolean;
}

export function Navbar({
  footer,
  items,
  header,
  bottomItems,
  children,
  containerStyle,
  hasExtraBadge,
}: NavbarProps): ReactElement {
  const theme = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const platform = useResponsiveValue('mobile', 'tablet', 'desktop');
  const isMobile = platform === 'mobile';

  const matches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  const [isMenuExpanded, setMenuExpanded] = useState(matches);

  const hasBadge = hasExtraBadge || items.some((item) => item.badge);

  const ctx = useMemo<NavbarContextType>(
    () => ({
      isDrawerOpen,
      isMenuExpanded,
      setDrawerOpen,
      setMenuExpanded,
      isNavbarExpanded: isMenuExpanded || isDrawerOpen,
    }),
    [isDrawerOpen, isMenuExpanded, setMenuExpanded, setDrawerOpen],
  );

  return (
    <NavbarContext.Provider value={ctx}>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: isMobile ? 'column' : 'row',
          ...containerStyle,
        }}
      >
        {!isMobile && (
          <Aside>
            <NavbarList header={header} items={items} footer={footer} />
          </Aside>
        )}

        <Main>{children}</Main>

        {isMobile && (
          <NavbarBottomBar items={bottomItems} hasMenuBadge={hasBadge} />
        )}

        <Drawer
          open={isDrawerOpen}
          anchor="right"
          onClose={() => {
            setDrawerOpen(false);
          }}
          PaperProps={{
            style: {
              width: '280px',
              minWidth: '280px',
            },
          }}
        >
          <NavbarList header={header} items={items} footer={footer} />
        </Drawer>
      </div>
    </NavbarContext.Provider>
  );
}
