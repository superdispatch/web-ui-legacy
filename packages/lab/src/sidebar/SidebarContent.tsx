import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import {
  Column,
  Columns,
  Stack,
  useCollapseBreakpoint,
} from '@superdispatch/ui';
import { MouseEvent, ReactElement, ReactNode } from 'react';
import { TextBox } from '../text-box/TextBox';
import { useSidebarContext } from './SidebarContainer';

export interface SidebarContentProps {
  backArrowIcon?: ReactNode;
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
  backArrowIcon = <ArrowBack fontSize="small" />,
}: SidebarContentProps): ReactElement {
  const isCollapsed = useCollapseBreakpoint('sm');
  const { openSidebar } = useSidebarContext();
  return (
    <Stack>
      <AppBar>
        <Toolbar>
          <Columns align="center">
            {isCollapsed && (
              <Column width="content">
                <IconButton
                  size="small"
                  onClick={(event) => {
                    onBack?.(event);
                    if (!event.isDefaultPrevented()) {
                      openSidebar();
                    }
                  }}
                >
                  {backArrowIcon}
                </IconButton>
              </Column>
            )}

            <Column>
              <TextBox variant="heading-2">{title}</TextBox>
            </Column>

            <Column width="content">{action}</Column>
          </Columns>
        </Toolbar>
      </AppBar>

      {children}
    </Stack>
  );
}
