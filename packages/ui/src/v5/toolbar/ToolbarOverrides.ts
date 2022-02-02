import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideToolbar(theme: SuperDispatchTheme): void {
  theme.components.MuiToolbar = {
    styleOverrides: {
      regular: { minHeight: theme.spacing(8) },

      gutters: {
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        },
      },
    },
  };
}
