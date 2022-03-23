import { AppBar, styled, Toolbar } from '@mui/material';
import { forwardRef, HTMLAttributes } from 'react';
import { Color } from '../theme/Color';
import { VisibilityObserver } from '../utils/VisibilityObserver';

const StyledAppBar = styled(AppBar)(({ theme }) => {
  return {
    bottom: 0,
    top: 'auto',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    transition: theme.transitions.create(['border-color']),

    '&[data-sticky="false"]': {
      borderTopColor: Color.Transparent,
    },
  };
});

const StyledToolbar = styled(Toolbar)(({ theme }) => {
  return {
    '&.MuiToolbar-gutters': {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),

      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
    },
  };
});

export type DrawerActionsProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'>;

export const DrawerActions = forwardRef<HTMLDivElement, DrawerActionsProps>(
  ({ children, ...props }, appBarRef) => {
    return (
      <VisibilityObserver
        render={({ ref, visibility }) => (
          <>
            <StyledAppBar
              {...props}
              ref={appBarRef}
              position="sticky"
              data-sticky={visibility === 'invisible'}
            >
              <StyledToolbar>{children}</StyledToolbar>
            </StyledAppBar>

            <div ref={ref} />
          </>
        )}
      />
    );
  },
);
