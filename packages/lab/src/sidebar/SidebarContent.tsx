import { AppBar, Toolbar } from '@material-ui/core';
import { Column, Columns, Stack, SuperDispatchTheme } from '@superdispatch/ui';
import {
  MouseEvent,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useRef,
} from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../box/Box';
import { TextBox } from '../text-box/TextBox';
import { SidebarBackButton } from './SidebarBackButton';
import { useSidebarContext } from './SidebarContainer';

const SidebarAppBar = styled(AppBar)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    return css`
      ${theme.breakpoints.up('sm')} {
        && {
          border-left: transparent;
        }
      }
    `;
  },
);

export interface SidebarContentProps {
  dense?: boolean;
  title: ReactNode;
  children: ReactNode;
  action?: ReactNode;
  openOnMount?: boolean;
  closeOnUnmount?: boolean;
  onBack?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function SidebarContent({
  dense,
  action,
  title,
  children,
  onBack,
  openOnMount,
  closeOnUnmount,
}: SidebarContentProps): ReactElement {
  const isOpenedOnMount = useRef<boolean>(false);
  const isClosedOnMount = useRef<boolean>(false);

  const { openSidebarContent, openSidebar } = useSidebarContext();

  useLayoutEffect(() => {
    if (openOnMount) {
      if (isOpenedOnMount.current) {
        // eslint-disable-next-line no-console
        console.warn(
          '[SidebarContent]: "openOnMount" should not change during lifecycle of the component.',
        );
      } else {
        isOpenedOnMount.current = true;
        openSidebarContent();
      }
    }
  }, [openOnMount, openSidebarContent]);

  useLayoutEffect(() => {
    return () => {
      if (closeOnUnmount) {
        if (isClosedOnMount.current) {
          // eslint-disable-next-line no-console
          console.warn(
            '[SidebarContent]: "closeOnUnmount" should not change during lifecycle of the component.',
          );
        } else {
          isClosedOnMount.current = true;
          openSidebar();
        }
      }
    };
  }, [openSidebar, closeOnUnmount]);

  return (
    <Stack space="none">
      <SidebarAppBar>
        <Toolbar>
          <Columns align="center">
            <Column width="content">
              <SidebarBackButton onClick={onBack} />
            </Column>

            <Column>
              <TextBox variant="heading-2">{title}</TextBox>
            </Column>

            <Column width="content">{action}</Column>
          </Columns>
        </Toolbar>
      </SidebarAppBar>

      <Box padding={dense ? 'none' : 'medium'}>{children}</Box>
    </Stack>
  );
}
