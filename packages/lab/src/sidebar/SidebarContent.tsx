import { AppBar, Toolbar } from '@material-ui/core';
import { Column, Columns, Stack, SuperDispatchTheme } from '@superdispatch/ui';
import { MouseEvent, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { TextBox } from '../text-box/TextBox';
import { SidebarBackButton } from './SidebarBackButton';

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
  title: ReactNode;
  children: ReactNode;
  action?: ReactNode;
  onBack?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function SidebarContent({
  action,
  title,
  children,
  onBack,
}: SidebarContentProps): ReactElement {
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

      {children}
    </Stack>
  );
}
