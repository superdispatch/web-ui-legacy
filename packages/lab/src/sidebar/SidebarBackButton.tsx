import { ArrowBack } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';
import { useCollapseBreakpoint } from '@superdispatch/ui';
import { ReactElement } from 'react';
import { useSidebarContext } from './SidebarContainer';

export function SidebarBackButton({
  onClick,
  children = <ArrowBack fontSize="small" />,
  ...props
}: IconButtonProps): ReactElement | null {
  const isCollapsed = useCollapseBreakpoint('sm');
  const { openSidebar } = useSidebarContext();

  if (!isCollapsed) {
    return null;
  }

  return (
    <IconButton
      {...props}
      size="small"
      onClick={(event) => {
        onClick?.(event);
        if (!event.isDefaultPrevented()) {
          openSidebar();
        }
      }}
    >
      {children}
    </IconButton>
  );
}
