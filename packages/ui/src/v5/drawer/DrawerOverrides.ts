import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideDrawer(theme: SuperDispatchTheme): void {
  theme.components.MuiDrawer = {
    defaultProps: {
      anchor: 'right',
    },
    styleOverrides: {
      paper: {
        maxWidth: '100%',
        minWidth: '100%',

        [theme.breakpoints.up('sm')]: {
          minWidth: theme.spacing(54),
          maxWidth: theme.breakpoints.values.sm,
        },
      },
    },
  };
}
