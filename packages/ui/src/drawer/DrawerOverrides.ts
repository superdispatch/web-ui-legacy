import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

/** @deprecated - Please use `<Drawer>` component */
export function overrideDrawer(theme: SuperDispatchTheme): void {
  theme.props.MuiDrawer = {
    anchor: 'right',
  };

  theme.overrides.MuiDrawer = {
    paper: {
      maxWidth: '100%',
      minWidth: '100%',

      [theme.breakpoints.up('sm')]: {
        minWidth: theme.spacing(54),
        maxWidth: theme.breakpoints.values.sm,
      },
    },
  };
}
