import { Drawer, useMediaQuery, useTheme } from '@material-ui/core';
import { ColorDynamic, useResponsiveValue } from '@superdispatch/ui';
import {
  CSSProperties,
  Key,
  ReactElement,
  ReactNode,
  useCallback,
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
  isMenuExpanded?: boolean;
  groupExpanded?: Record<string, boolean>;
  onMenuExpandedChange?: (isExpanded: boolean) => void;
  onGroupExpandedChange?: (groupExpanded: Record<string, boolean>) => void;
}

export function Navbar({
  footer,
  items,
  header,
  bottomItems,
  children,
  containerStyle,
  hasExtraBadge,
  groupExpanded: controlledGroupExpanded,
  isMenuExpanded: controlledIsMenuExpanded,
  onMenuExpandedChange,
  onGroupExpandedChange,
}: NavbarProps): ReactElement {
  const theme = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const platform = useResponsiveValue('mobile', 'tablet', 'desktop');
  const isMobile = platform === 'mobile';

  const matches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  const [internalIsMenuExpanded, setInternalMenuExpanded] = useState(matches);

  const [groupExpandedState, setGroupExpandedState] = useState<
    Record<string, boolean>
  >(controlledGroupExpanded || {});

  const groupExpanded = controlledGroupExpanded
    ? controlledGroupExpanded
    : groupExpandedState;

  const isMenuExpanded =
    controlledIsMenuExpanded !== undefined
      ? controlledIsMenuExpanded
      : internalIsMenuExpanded;

  const setMenuExpanded = useCallback(
    (value: boolean): void => {
      if (controlledIsMenuExpanded === undefined) {
        setInternalMenuExpanded(value);
      }
      onMenuExpandedChange?.(value);
    },
    [controlledIsMenuExpanded, onMenuExpandedChange],
  );

  const setGroupExpanded = useCallback(
    (groupKey: Key, isExpanded: boolean) => {
      const updatedGroupExpanded = {
        ...groupExpanded,
        [groupKey]: isExpanded,
      };

      if (!controlledGroupExpanded) {
        setGroupExpandedState(updatedGroupExpanded);
      }

      onGroupExpandedChange?.(updatedGroupExpanded);
    },
    [controlledGroupExpanded, groupExpanded, onGroupExpandedChange],
  );

  const hasBadge = hasExtraBadge || items.some((item) => item.badge);

  const ctx = useMemo<NavbarContextType>(
    () => ({
      isDrawerOpen,
      isMenuExpanded,
      setDrawerOpen,
      setMenuExpanded,
      isNavbarExpanded: isMenuExpanded || isDrawerOpen,
      setGroupExpanded,
      groupExpanded,
    }),
    [
      isDrawerOpen,
      isMenuExpanded,
      setMenuExpanded,
      setGroupExpanded,
      groupExpanded,
    ],
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
