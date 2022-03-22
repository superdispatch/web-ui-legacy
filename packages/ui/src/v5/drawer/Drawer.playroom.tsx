import { Drawer as MuiDrawer, DrawerProps } from '@mui/material';
import { forwardRef } from 'react';

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      disableAutoFocus = true,
      disableEnforceFocus = true,
      disableRestoreFocus = true,
      ...props
    },
    ref,
  ) => (
    <MuiDrawer
      {...props}
      ref={ref}
      disableAutoFocus={disableAutoFocus}
      disableEnforceFocus={disableEnforceFocus}
      disableRestoreFocus={disableRestoreFocus}
    />
  ),
);
