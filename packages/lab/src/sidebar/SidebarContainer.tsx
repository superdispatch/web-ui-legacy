import { useCollapseBreakpoint } from '@superdispatch/ui';
import {
  createContext,
  forwardRef,
  ReactChild,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';

interface SidebarContext {
  openSidebar: () => void;
  openSidebarContent: () => void;
}

const Context = createContext<SidebarContext | null>(null);

export function useSidebarContext(): SidebarContext {
  const context = useContext(Context);

  if (!context) {
    throw new Error('SidebarContext is used outside Provider');
  }

  return context;
}

const SidebarContainerSidebar = styled.div`
  height: inherit;
  max-height: inherit;
  min-height: inherit;

  width: 240px;
`;

const SidebarContainerContent = styled.div`
  height: inherit;
  max-height: inherit;
  min-height: inherit;
`;

const SidebarContainerRoot = styled.div`
  display: flex;

  height: inherit;
  max-height: inherit;
  min-height: inherit;

  & ${SidebarContainerContent} {
    width: calc(100% - 240px);
    min-width: calc(100% - 240px);
    max-width: calc(100% - 240px);
  }

  &[data-visibility='sidebar'] ${SidebarContainerSidebar} {
    width: 100%;
  }

  &[data-visibility='sidebar'] ${SidebarContainerContent} {
    display: none;
  }

  &[data-visibility='content'] ${SidebarContainerSidebar} {
    display: none;
  }

  &[data-visibility='content'] ${SidebarContainerContent} {
    width: 100%;
    max-width: unset;
  }
`;

export interface SidebarContainerProps {
  sidebar: ReactChild;
  children?: ReactNode;
}

type SidebarContainerVisibility = 'both' | 'sidebar' | 'content';

export const SidebarContainer = forwardRef<
  HTMLDivElement,
  SidebarContainerProps
>(({ sidebar, children }, ref) => {
  const isCollapsed = useCollapseBreakpoint('sm');
  const [visibilityState, setVisibilityState] =
    useState<SidebarContainerVisibility>('sidebar');

  const visibility: SidebarContainerVisibility = isCollapsed
    ? visibilityState
    : 'both';

  const context = useMemo<SidebarContext>(() => {
    return {
      openSidebar: () => {
        setVisibilityState('sidebar');
      },
      openSidebarContent: () => {
        setVisibilityState('content');
      },
    };
  }, []);

  return (
    <Context.Provider value={context}>
      <SidebarContainerRoot ref={ref} data-visibility={visibility}>
        <SidebarContainerSidebar>{sidebar}</SidebarContainerSidebar>

        <SidebarContainerContent>{children}</SidebarContainerContent>
      </SidebarContainerRoot>
    </Context.Provider>
  );
});
